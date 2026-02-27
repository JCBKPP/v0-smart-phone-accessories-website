export interface Branch {
  id: string;
  name: string;
  shortName: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  mapQuery: string;
}

export interface BranchArea {
  id: string;
  label: string;
  branches: Branch[];
}

// Helper to generate Google Maps search URL from address
const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const ALL_BRANCHES: Branch[] = [
  // ========== KK CITY AREA ==========
  {
    id: "wisma-merdeka",
    name: "SP Accessories Wisma Merdeka",
    shortName: "Wisma Merdeka",
    area: "kk-city",
    address: "Lot B124, 1st Floor, Wisma Merdeka Phase 2, Stage 1, 88000 Kota Kinabalu, Sabah",
    phone: "014-951 3123",
    hours: "10am - 9pm",
    mapUrl: mapsUrl("Smart Phone Accessories Wisma Merdeka Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Wisma Merdeka Kota Kinabalu",
  },
  {
    id: "kk-plaza",
    name: "SP Accessories KK Plaza",
    shortName: "KK Plaza",
    area: "kk-city",
    address: "Lot G39, Ground Floor CB-G.39, KK Plaza, 2A Jalan Lapan Belas, 88000 Kota Kinabalu, Sabah",
    phone: "014-951 3125",
    hours: "10am - 9pm",
    mapUrl: mapsUrl("Smart Phone Accessories KK Plaza Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories KK Plaza Kota Kinabalu",
  },
  {
    id: "centre-point-1",
    name: "SP Accessories Centre Point 1",
    shortName: "Centre Point 1",
    area: "kk-city",
    address: "Lot 7, City Parade, Centre Point, 88000 Kota Kinabalu, Sabah",
    phone: "016-878 4311",
    hours: "10am - 9pm",
    mapUrl: mapsUrl("Smart Phone Accessories Centre Point Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Centre Point Kota Kinabalu",
  },
  {
    id: "centre-point-2",
    name: "SP Accessories Centre Point 2",
    shortName: "Centre Point 2",
    area: "kk-city",
    address: "Lot 34, Ground Floor, Section A, City Parade, Jalan Centre Point, 88000 Kota Kinabalu, Sabah",
    phone: "014-951 3105",
    hours: "10am - 9pm",
    mapUrl: mapsUrl("Smart Phone Accessories City Parade Centre Point Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories City Parade Centre Point Kota Kinabalu",
  },
  {
    id: "sinsuran",
    name: "SP Accessories Sinsuran",
    shortName: "Sinsuran",
    area: "kk-city",
    address: "Lot 1, Block F, Ground Floor, Sinsuran Complex, 88000 Kota Kinabalu, Sabah",
    phone: "014-617 7211",
    hours: "10am - 9pm",
    mapUrl: mapsUrl("Smart Phone Accessories Sinsuran Complex Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Sinsuran Complex Kota Kinabalu",
  },

  // ========== KARAMUNSING AREA ==========
  {
    id: "karamunsing",
    name: "SP Accessories Karamunsing Capital",
    shortName: "Karamunsing",
    area: "karamunsing",
    address: "A-0-1, Lot 1, Block A, Ground Floor, Karamunsing Capital, 88450 Kota Kinabalu, Sabah",
    phone: "016-937 5611",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Karamunsing Capital Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Karamunsing Capital Kota Kinabalu",
  },

  // ========== INANAM / MENGGATAL AREA ==========
  {
    id: "inanam-taipan",
    name: "SP Accessories KK Taipan",
    shortName: "KK Taipan",
    area: "inanam",
    address: "Lot 16, Block F (F-0-16), Lorong KK Taipan, KK Taipan, 88450 Kota Kinabalu, Sabah",
    phone: "016-783 8711",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories KK Taipan Inanam Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories KK Taipan Inanam Kota Kinabalu",
  },
  {
    id: "inanam-bc",
    name: "SP Accessories Inanam BC",
    shortName: "Inanam BC",
    area: "inanam",
    address: "Lot 59, Block H, Ground Floor (DBKK No.21-0), Inanam Business Centre Phase 2, Jalan Tuaran, 88450 Kota Kinabalu, Sabah",
    phone: "016-743 4011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Inanam Business Centre Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Inanam Business Centre Kota Kinabalu",
  },
  {
    id: "kingfisher",
    name: "SP Accessories Plaza Kingfisher",
    shortName: "Plaza Kingfisher",
    area: "inanam",
    address: "Lot 43, DBKK No.1-0, Ground Floor, Block A, Lorong Plaza Kingfisher 3, Plaza Kingfisher, KM 8, Kuala Inanam, 88450 Kota Kinabalu, Sabah",
    phone: "016-940 3811",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Plaza Kingfisher Kuala Inanam Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Plaza Kingfisher Kuala Inanam Kota Kinabalu",
  },
  {
    id: "menggatal",
    name: "SP Accessories Menggatal Plaza",
    shortName: "Menggatal Plaza",
    area: "inanam",
    address: "Lot 52, Ground Floor, Block E (DBKK No. E-0-6), Menggatal Plaza Phase 2, 88450 Kota Kinabalu, Sabah",
    phone: "016-826 8011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Menggatal Plaza Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Menggatal Plaza Kota Kinabalu",
  },
  {
    id: "indah-permai",
    name: "SP Accessories Indah Permai",
    shortName: "Indah Permai",
    area: "inanam",
    address: "Unit No.E5-0-8, Lot 8, Ground Floor, Block E, Lorong Indah Permai Shophouse, Taman Indah Permai, Off Jalan Sepangar, 88450 Kota Kinabalu, Sabah",
    phone: "016-804 7411",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Taman Indah Permai Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Taman Indah Permai Kota Kinabalu",
  },

  // ========== TELIPOK AREA ==========
  {
    id: "telipok",
    name: "SP Accessories Telipok",
    shortName: "Telipok",
    area: "telipok",
    address: "Lot No. SB-5, University Utama Square, Telipok, 88450 Kota Kinabalu, Sabah",
    phone: "011-3639 1926",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories University Utama Square Telipok Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories University Utama Square Telipok Kota Kinabalu",
  },

  // ========== PENAMPANG / DONGGONGON AREA ==========
  {
    id: "megalong",
    name: "SP Accessories Megalong",
    shortName: "Megalong",
    area: "penampang",
    address: "Lot 41, Ground Floor, Megalong Commercial Complex, 89500 Penampang, Kota Kinabalu, Sabah",
    phone: "016-675 7168",
    hours: "10am - 9pm",
    mapUrl: mapsUrl("Smart Phone Accessories Megalong Penampang"),
    mapQuery: "Smart Phone Accessories Megalong Penampang",
  },
  {
    id: "grand-millennium",
    name: "SP Accessories Grand Millennium",
    shortName: "Grand Millennium",
    area: "penampang",
    address: "Lot 7, Ground Floor, Block A, Plaza Grand Millennium, Jalan Penampang-Donggongon By-Pass, 88300 Kota Kinabalu, Sabah",
    phone: "016-726 8011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Plaza Grand Millennium Penampang Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Plaza Grand Millennium Penampang Kota Kinabalu",
  },
  {
    id: "penampang-baru",
    name: "SP Accessories Bandar Baru Penampang",
    shortName: "Bandar Baru",
    area: "penampang",
    address: "Lot 9, Block 21, Ground Floor, Bandar Baru Penampang, 88300 Kota Kinabalu, Sabah",
    phone: "016-828 3511",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Bandar Baru Penampang Kota Kinabalu"),
    mapQuery: "Smart Phone Accessories Bandar Baru Penampang Kota Kinabalu",
  },
  {
    id: "itcc-mall",
    name: "SP Accessories ITCC Mall",
    shortName: "ITCC Mall",
    area: "penampang",
    address: "Lot G-93B, Ground Floor, ITCC Shopping Mall, Jalan Pintas, 89500 Penampang, Sabah",
    phone: "016-953 4011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories ITCC Shopping Mall Penampang"),
    mapQuery: "Smart Phone Accessories ITCC Shopping Mall Penampang",
  },

  // ========== PUTATAN AREA ==========
  {
    id: "putatan",
    name: "SP Accessories Putatan",
    shortName: "Putra Square",
    area: "putatan",
    address: "Lot 6, Ground Floor, Putra Square Phase 1, Bandar Putatan, 88200 Putatan, Sabah",
    phone: "016-585 4011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Putra Square Putatan"),
    mapQuery: "Smart Phone Accessories Putra Square Putatan",
  },

  // ========== TUARAN AREA ==========
  {
    id: "tuaran-cks",
    name: "SP Accessories Plaza CKS Tuaran",
    shortName: "Plaza CKS",
    area: "tuaran",
    address: "Lot No. 47, Block E, Plaza CKS Tuaran, Kg Tutoh, Jalan Tuaran Plaza CKS, 89250 Tuaran, Sabah",
    phone: "014-398 4811",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Plaza CKS Tuaran"),
    mapQuery: "Smart Phone Accessories Plaza CKS Tuaran",
  },
  {
    id: "tuaran-pekan",
    name: "SP Accessories Pekan Tuaran",
    shortName: "Pekan Tuaran",
    area: "tuaran",
    address: "Lot 7, Ground Floor, Jalan Balanting, 89208 Tuaran, Sabah",
    phone: "016-852 4911",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Pekan Tuaran Jalan Balanting"),
    mapQuery: "Smart Phone Accessories Pekan Tuaran Jalan Balanting",
  },

  // ========== PAPAR AREA ==========
  {
    id: "papar-square",
    name: "SP Accessories Papar Square",
    shortName: "Papar Square",
    area: "papar",
    address: "Lot 53A, Block 9, Ground Floor, Papar Square, Kg Lingan, 89600 Papar, Sabah",
    phone: "016-716 8011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Papar Square Papar"),
    mapQuery: "Smart Phone Accessories Papar Square Papar",
  },
  {
    id: "papar-benoni",
    name: "SP Accessories Benoni",
    shortName: "Benoni",
    area: "papar",
    address: "Lot 160, Ground Floor, Lorong Benoni 15, Benoni Commercial Centre Phase 3, 89600 Papar, Sabah",
    phone: "016-804 3211",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Benoni Commercial Centre Papar"),
    mapQuery: "Smart Phone Accessories Benoni Commercial Centre Papar",
  },
  {
    id: "kinarut",
    name: "SP Accessories Kinarut",
    shortName: "Kinarut",
    area: "papar",
    address: "Lot No. 60, Block E, The Palm Square Kinarut, 89500 Papar, Sabah",
    phone: "016-602 4011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories The Palm Square Kinarut Papar"),
    mapQuery: "Smart Phone Accessories The Palm Square Kinarut Papar",
  },

  // ========== KENINGAU AREA ==========
  {
    id: "keningau-datun",
    name: "SP Accessories Keningau Datun",
    shortName: "Datun",
    area: "keningau",
    address: "Lot No. 13, Ground Floor, Datun Commercial Complex, 89000 Keningau, Sabah",
    phone: "016-323 8011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Datun Commercial Complex Keningau"),
    mapQuery: "Smart Phone Accessories Datun Commercial Complex Keningau",
  },
  {
    id: "keningau-pegalan",
    name: "SP Accessories Keningau Pegalan",
    shortName: "Pegalan",
    area: "keningau",
    address: "Lot 63, Ground Floor, Pegalan Complex, 89008 Keningau, Sabah",
    phone: "016-248 6011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Pegalan Complex Keningau"),
    mapQuery: "Smart Phone Accessories Pegalan Complex Keningau",
  },
  {
    id: "keningau-foolung",
    name: "SP Accessories Keningau Foo Lung",
    shortName: "Foo Lung",
    area: "keningau",
    address: "Lot No. 9, Ground Floor, Block C 13, Foo Lung Shopping Complex, 89000 Keningau, Sabah",
    phone: "016-806 7811",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Foo Lung Shopping Complex Keningau"),
    mapQuery: "Smart Phone Accessories Foo Lung Shopping Complex Keningau",
  },

  // ========== BEAUFORT AREA ==========
  {
    id: "beaufort",
    name: "SP Accessories Beaufort",
    shortName: "Beaufort",
    area: "beaufort",
    address: "Lot 14, Ground Floor, Block C, Phase 1, 1 Beaufort Commercial Centre, 89800 Beaufort, Sabah",
    phone: "016-840 7011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories 1 Beaufort Commercial Centre Beaufort"),
    mapQuery: "Smart Phone Accessories 1 Beaufort Commercial Centre Beaufort",
  },

  // ========== RANAU AREA ==========
  {
    id: "ranau",
    name: "SP Accessories Ranau",
    shortName: "Ranau",
    area: "ranau",
    address: "Lot 6, Ground Floor, Block O, Kedai SEDCO, Pekan Ranau, 89308 Ranau, Sabah",
    phone: "016-257 9011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories SEDCO Pekan Ranau"),
    mapQuery: "Smart Phone Accessories SEDCO Pekan Ranau",
  },

  // ========== KUDAT AREA ==========
  {
    id: "kudat",
    name: "SP Accessories Kudat",
    shortName: "Kudat",
    area: "kudat",
    address: "Block E-3A-0, Friendly Town Phase 1, Lorong Friendly Town 2, 89050 Kudat, Sabah",
    phone: "016-829 9711",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Friendly Town Kudat"),
    mapQuery: "Smart Phone Accessories Friendly Town Kudat",
  },

  // ========== KOTA MARUDU AREA ==========
  {
    id: "kota-marudu-1",
    name: "SP Accessories Kota Marudu",
    shortName: "Goshen",
    area: "kota-marudu",
    address: "Lot 8, Kedai Goshen, 89100 Kota Marudu, Sabah",
    phone: "016-359 9511",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Kedai Goshen Kota Marudu"),
    mapQuery: "Smart Phone Accessories Kedai Goshen Kota Marudu",
  },
  {
    id: "kota-marudu-2",
    name: "SP Accessories Kota Marudu Cosmo",
    shortName: "Cosmo Point",
    area: "kota-marudu",
    address: "Lot 20, Ground Floor, Block C, 2 Storey Light Industrial Shop, Cosmo Point, 89108 Kota Marudu, Sabah",
    phone: "016-725 4311",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Cosmo Point Kota Marudu"),
    mapQuery: "Smart Phone Accessories Cosmo Point Kota Marudu",
  },

  // ========== KOTA BELUD AREA ==========
  {
    id: "kota-belud",
    name: "SP Accessories Kota Belud",
    shortName: "Kota Belud",
    area: "kota-belud",
    address: "Lot 9, Block A, Ground Floor, Suria Commercial Centre, 89150 Kota Belud, Sabah",
    phone: "016-802 4811",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Suria Commercial Centre Kota Belud"),
    mapQuery: "Smart Phone Accessories Suria Commercial Centre Kota Belud",
  },

  // ========== SIPITANG AREA ==========
  {
    id: "sipitang",
    name: "SP Accessories Sipitang",
    shortName: "Sipitang",
    area: "sipitang",
    address: "Unit No. 2, Block J, Ground Floor, Sipitang Commercial Centre, 89850 Sipitang, Sabah",
    phone: "010-241 4822",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Sipitang Commercial Centre Sipitang"),
    mapQuery: "Smart Phone Accessories Sipitang Commercial Centre Sipitang",
  },

  // ========== SANDAKAN AREA ==========
  {
    id: "sandakan-sejati",
    name: "SP Accessories Sejati Walk",
    shortName: "Sejati Walk",
    area: "sandakan",
    address: "Lot 1-D-276, Sejati Walk, 90000 Sandakan, Sabah",
    phone: "016-963 8011",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Sejati Walk Sandakan"),
    mapQuery: "Smart Phone Accessories Sejati Walk Sandakan",
  },
  {
    id: "sandakan-bandar",
    name: "SP Accessories Sandakan Bandar",
    shortName: "Bandar Sandakan",
    area: "sandakan",
    address: "Lot No. 4A, Block 23, Ground Floor, Eastern Half, Jalan Tiga, Pusat Bandar Sandakan, 90000 Sandakan, Sabah",
    phone: "016-856 9611",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Pusat Bandar Sandakan Jalan Tiga"),
    mapQuery: "Smart Phone Accessories Pusat Bandar Sandakan Jalan Tiga",
  },
  {
    id: "sandakan-prima",
    name: "SP Accessories Prima Square",
    shortName: "Prima Square",
    area: "sandakan",
    address: "Lot No. 199, Block 20, Ground Floor Phase 3, Lorong Prima 7, Prima Square, 90000 Sandakan, Sabah",
    phone: "016-868 2611",
    hours: "10am - 10pm",
    mapUrl: mapsUrl("Smart Phone Accessories Prima Square Sandakan"),
    mapQuery: "Smart Phone Accessories Prima Square Sandakan",
  },
];

export const BRANCH_AREAS: BranchArea[] = [
  { id: "kk-city", label: "KK City", branches: ALL_BRANCHES.filter(b => b.area === "kk-city") },
  { id: "karamunsing", label: "Karamunsing", branches: ALL_BRANCHES.filter(b => b.area === "karamunsing") },
  { id: "inanam", label: "Inanam / Menggatal", branches: ALL_BRANCHES.filter(b => b.area === "inanam") },
  { id: "telipok", label: "Telipok", branches: ALL_BRANCHES.filter(b => b.area === "telipok") },
  { id: "penampang", label: "Penampang", branches: ALL_BRANCHES.filter(b => b.area === "penampang") },
  { id: "putatan", label: "Putatan", branches: ALL_BRANCHES.filter(b => b.area === "putatan") },
  { id: "tuaran", label: "Tuaran", branches: ALL_BRANCHES.filter(b => b.area === "tuaran") },
  { id: "papar", label: "Papar", branches: ALL_BRANCHES.filter(b => b.area === "papar") },
  { id: "keningau", label: "Keningau", branches: ALL_BRANCHES.filter(b => b.area === "keningau") },
  { id: "beaufort", label: "Beaufort", branches: ALL_BRANCHES.filter(b => b.area === "beaufort") },
  { id: "ranau", label: "Ranau", branches: ALL_BRANCHES.filter(b => b.area === "ranau") },
  { id: "kudat", label: "Kudat", branches: ALL_BRANCHES.filter(b => b.area === "kudat") },
  { id: "kota-marudu", label: "Kota Marudu", branches: ALL_BRANCHES.filter(b => b.area === "kota-marudu") },
  { id: "kota-belud", label: "Kota Belud", branches: ALL_BRANCHES.filter(b => b.area === "kota-belud") },
  { id: "sipitang", label: "Sipitang", branches: ALL_BRANCHES.filter(b => b.area === "sipitang") },
  { id: "sandakan", label: "Sandakan", branches: ALL_BRANCHES.filter(b => b.area === "sandakan") },
];

export const ALL_BRANCHES_FLAT = ALL_BRANCHES;

// Featured branches for homepage preview
export const PREVIEW_BRANCHES = [
  ALL_BRANCHES.find(b => b.id === "karamunsing")!,
  ALL_BRANCHES.find(b => b.id === "megalong")!,
];
