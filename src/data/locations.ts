// Service area. Distances are approximate — confirm with L&L. Local copy is DRAFT and must be made unique per town.
export type Location = {
  slug: string; name: string; tier: 1 | 2 | 3; distance: string; covers?: string[];
  intro: string; conditions: string[]; draft?: boolean;
};

export const localServiceSlugs = [
  'excavation', 'retaining-walls', 'site-cuts-house-pads',
  'exposed-aggregate', 'concrete-driveways', 'house-slabs-footings',
];

export const locations: Location[] = [
  { slug: 'airlie-beach', name: 'Airlie Beach', tier: 1, distance: 'Home base',
    intro: 'Airlie Beach is our home patch. Steep hillside lots, tight streets and salt air shape every job here, from house pads above Shute Harbour Road to exposed aggregate driveways on the waterfront.',
    conditions: ['Steep hillside blocks that need benching and retaining', 'Rock close to the surface on many ridgeline lots', 'Salt-air exposure, so we specify durable finishes and galvanised steel', 'Heavy wet-season runoff down the slopes'] },
  { slug: 'cannonvale', name: 'Cannonvale', tier: 1, distance: '~3 km',
    intro: 'Cannonvale is where most new Whitsunday homes are being built. We cut pads, build walls and pour slabs across its new estates and established streets.',
    conditions: ['New estates with engineered fill and compaction requirements', 'Sloping lots needing sleeper and block walls', 'Driveway crossovers to council spec', 'Stormwater connections on new builds'] },
  { slug: 'proserpine', name: 'Proserpine', tier: 1, distance: '~25 km',
    intro: 'In and around Proserpine we work on town blocks, cane-country acreage and rural properties, from house slabs to dams and shed pads.',
    conditions: ['Flat, heavier soils that need proper drainage and compaction', 'Acreage with long driveways and access tracks', 'Shed and machinery pads', 'Flood-prone areas that need careful pad heights'] },
  { slug: 'jubilee-pocket-shute-harbour', name: 'Jubilee Pocket & Shute Harbour', tier: 1, distance: '~5–10 km',
    covers: ['Jubilee Pocket', 'Shute Harbour', 'Flametree'],
    intro: 'Bush blocks and hillside homes around Jubilee Pocket and Shute Harbour often need careful access, retaining and drainage.', conditions: ['Tight access and steep driveways', 'Bushland clearing with erosion control', 'Retaining on sloping lots'] },
  { slug: 'airlie-hinterland', name: 'Airlie Hinterland', tier: 2, distance: '~5–12 km',
    covers: ['Cannon Valley', 'Woodwark', 'Riordanvale', 'Mount Julian'],
    intro: 'Lifestyle blocks in Cannon Valley, Woodwark, Riordanvale and Mount Julian mix house sites, sheds, driveways and dams.', conditions: ['Acreage house and shed pads', 'Long gravel or concrete driveways', 'Creek crossings and drainage'] },
  { slug: 'bowen', name: 'Bowen', tier: 2, distance: '~60 km',
    intro: 'We travel to Bowen for earthworks, walls and concrete on residential, commercial and rural jobs.', conditions: ['Sandy coastal soils needing good compaction', 'Rural and horticulture properties', 'Commercial hardstands'] },
  { slug: 'conway-wilson-beach', name: 'Conway & Wilson Beach', tier: 2, distance: '~20–25 km', covers: ['Conway Beach', 'Wilson Beach'],
    intro: 'Coastal blocks at Conway and Wilson Beach need pads set at the right height and drainage that copes with king tides and storms.', conditions: ['Low-lying coastal land', 'Sandy soils', 'Pad heights for flooding'] },
  { slug: 'midge-point-laguna-quays', name: 'Midge Point & Laguna Quays', tier: 2, distance: '~45–50 km', covers: ['Midge Point', 'Laguna Quays'],
    intro: 'We service Midge Point and Laguna Quays for house pads, driveways and concrete.', conditions: ['Coastal and estate blocks', 'Driveways and slabs'] },
  { slug: 'northern-beaches', name: 'Northern Beaches', tier: 2, distance: '~30–40 km', covers: ['Dingo Beach', 'Hydeaway Bay', 'Cape Gloucester'],
    intro: 'Dingo Beach, Hydeaway Bay and Cape Gloucester have holiday homes and new builds on rocky, sloping coastal sites.', conditions: ['Rocky coastal ground', 'Retaining on slopes', 'Access for machinery'] },
  { slug: 'rural-proserpine', name: 'Rural Proserpine', tier: 3, distance: '~15–40 km', covers: ['Strathdickie', 'Kelsey Creek', 'Gunyarra', 'Preston', 'Foxdale'],
    intro: 'Across the rural Proserpine district we build dams, tracks, shed pads and house sites for acreage owners.', conditions: ['Dams and contour banks', 'Access tracks and culverts', 'Machinery and shed pads'] },
  { slug: 'collinsville', name: 'Collinsville', tier: 3, distance: '~95 km', draft: true,
    intro: 'TODO: confirm L&L travel to Collinsville.', conditions: [] },
];

export const liveLocations = locations.filter((l) => !l.draft);
