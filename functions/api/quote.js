// Cloudflare Pages Function: POST /api/quote
// Env vars (set in Cloudflare dashboard): MONDAY_API_TOKEN, MONDAY_BOARD_ID, TURNSTILE_SECRET (optional), NOTIFY_WEBHOOK (optional)
export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  if (form.get('company_website')) return new Response('ok'); // honeypot

  // TODO: verify Turnstile token when widget is added
  const f = (k) => (form.get(k) || '').toString().slice(0, 2000);
  const lead = {
    name: f('name'), phone: f('phone'), email: f('email'), contact_pref: f('contact_pref'),
    hub: f('hub'), service: f('service'), type: f('type'), town: f('town'), address: f('address'),
    details: f('details'), access: f('access'), timeframe: f('timeframe'),
  };
  if (!lead.name || !lead.phone || !lead.email) return new Response('Missing fields', { status: 400 });

  // monday.com: create item on the leads board (map column IDs once the board exists)
  if (env.MONDAY_API_TOKEN && env.MONDAY_BOARD_ID) {
    const columnValues = JSON.stringify({ /* TODO: e.g. phone: { phone: lead.phone, countryShortName: 'AU' }, email: { email: lead.email, text: lead.email } */ });
    const query = `mutation ($board: ID!, $name: String!, $cols: JSON!) { create_item (board_id: $board, item_name: $name, column_values: $cols) { id } }`;
    const r = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: env.MONDAY_API_TOKEN },
      body: JSON.stringify({ query, variables: { board: env.MONDAY_BOARD_ID, name: `${lead.name} — ${lead.service || lead.hub} — ${lead.town}`, cols: columnValues } }),
    });
    if (!r.ok) return new Response('CRM error', { status: 502 });
    // TODO: upload files to the item via monday's add_file_to_column mutation
  }
  if (env.NOTIFY_WEBHOOK) await fetch(env.NOTIFY_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });

  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
}
