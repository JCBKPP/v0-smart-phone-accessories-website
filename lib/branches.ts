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

const ALL_BRANCHES: Branch[] = [
  // --- Inanam area ---
  {
    id: "inanam-bc",
    name: "SP Accessories Inanam BC",
    shortName: "Inanam BC",
    area: "inanam",
    address: "Lot 59 Ground Floor, Inanam Business Centre, Block H, PH2, Jalan Tuaran, 88450 Kota Kinabalu",
    phone: "016-743 4011",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SMART+PHONE+ACCESSORIES+SDN+BHD/data=!4m7!3m6!1s0x323b6b7f678f26a7",
    mapQuery: "SMART PHONE ACCESSORIES SDN BHD Inanam Business Centre Block H Jalan Tuaran Kota Kinabalu",
  },
  {
    id: "inanam-taipan",
    name: "SP Accessories Inanam Taipan",
    shortName: "Inanam Taipan",
    area: "inanam",
    address: "Taipan Lot 16 Block F (F-0-16), Lorong KK Taipan, Inanam, 88450 Kota Kinabalu",
    phone: "016-783 8711",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SMART+PHONE+ACCESSORIES+SDN+BHD/data=!4m7!3m6!1s0x323b6d4111ede0ab",
    mapQuery: "SMART PHONE ACCESSORIES SDN BHD Taipan Inanam Kota Kinabalu",
  },
  // --- Kingfisher area ---
  {
    id: "kingfisher",
    name: "SP Accessories Kingfisher",
    shortName: "Kingfisher",
    area: "kingfisher",
    address: "Lot 43 Ground Floor Block A, Plaza Kingfisher, Kuala Inanam, 88450 Kota Kinabalu",
    phone: "016-940 3811",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SMART+PHONE+ACCESSORIES+SDN+BHD/data=!4m7!3m6!1s0x323b6b52ac4da029",
    mapQuery: "SMART PHONE ACCESSORIES SDN BHD Plaza Kingfisher Kuala Inanam Kota Kinabalu",
  },
  // --- Karamunsing area ---
  {
    id: "karamunsing",
    name: "SP Accessories Karamunsing",
    shortName: "Karamunsing",
    area: "karamunsing",
    address: "A-0-1 Lot 1 Block A, Ground Floor, Karamunsing Capital, Kota Kinabalu",
    phone: "016-937 5611",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b693b49cd6169",
    mapQuery: "SP Karamunsing Capital Kota Kinabalu",
  },
  // --- Sinsuran area ---
  {
    id: "sinsuran",
    name: "SP Accessories Sinsuran",
    shortName: "Sinsuran",
    area: "sinsuran",
    address: "Lot 6 Block I Ground Floor, Ruang Sinsuran 4, Kota Kinabalu",
    phone: "014-617 7211",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b69536f17efc5",
    mapQuery: "SP Sinsuran Kompleks Kota Kinabalu",
  },
  // --- KK City area ---
  {
    id: "kk-plaza",
    name: "SP Accessories KK Plaza",
    shortName: "KK Plaza",
    area: "kk-city",
    address: "Lot G39 Ground Floor, KK Plaza, Kota Kinabalu",
    phone: "014-951 3125",
    hours: "10am - 9pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b692f90858b77",
    mapQuery: "SP KK Plaza Kota Kinabalu",
  },
  {
    id: "wisma-merdeka",
    name: "SP Accessories Wisma Merdeka",
    shortName: "Wisma Merdeka",
    area: "kk-city",
    address: "Lot B124 1st Floor, Wisma Merdeka Phase 2, Kota Kinabalu",
    phone: "014-951 3123",
    hours: "10am - 9pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b697c0bd0e677",
    mapQuery: "SP Wisma Merdeka Phase 2 Kota Kinabalu",
  },
  {
    id: "city-parade",
    name: "SP Accessories City Parade",
    shortName: "City Parade",
    area: "kk-city",
    address: "Lot 34 Ground Floor Section A, City Parade, Kota Kinabalu",
    phone: "014-951 3105",
    hours: "10am - 9pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b69a131c01109",
    mapQuery: "SP City Parade Centre Point Kota Kinabalu",
  },
  // --- Megalong / Penampang area ---
  {
    id: "megalong",
    name: "SP Accessories Megalong",
    shortName: "Megalong",
    area: "penampang",
    address: "LOT41 Ground Floor, Megalong Commercial Complex, Pekan Donggongon, 89500 Penampang, Sabah",
    phone: "016-675 7168",
    hours: "10am - 9pm",
    mapUrl: "https://www.google.com/maps/place/SMART+PHONE+ACCESSORIES+SDN+BHD/data=!4m7!3m6!1s0x323b69eb9d13481d",
    mapQuery: "SMART PHONE ACCESSORIES SDN BHD Megalong Donggongon Penampang",
  },
  {
    id: "grand-millennium",
    name: "SP Accessories Grand Millennium",
    shortName: "Grand Millennium",
    area: "penampang",
    address: "Lot 7 Ground Floor Block A, Plaza Grand Millennium, Penampang",
    phone: "016-726 8011",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b698dc89c2c1b",
    mapQuery: "SP Grand Millennium Penampang",
  },
  {
    id: "bandar-baru-penampang",
    name: "SP Accessories Bandar Baru Penampang",
    shortName: "Bandar Baru",
    area: "penampang",
    address: "Lot 9 Block 21 Ground Floor, Bandar Baru Penampang",
    phone: "016-828 3511",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b694dde394a55",
    mapQuery: "SP Bandar Baru Penampang",
  },
  // --- Putatan area ---
  {
    id: "putra-square",
    name: "SP Accessories Putatan",
    shortName: "Putra Square",
    area: "putatan",
    address: "Lot 6 Ground Floor, Putra Square Phase 1, Putatan",
    phone: "016-585 4011",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SMART+PHONE+ACCESSORIES+SDN+BHD/data=!4m7!3m6!1s0x323b6732785a3b45",
    mapQuery: "SMART PHONE ACCESSORIES SDN BHD Putra Square Putatan",
  },
  // --- Menggatal area ---
  {
    id: "menggatal",
    name: "SP Accessories Menggatal",
    shortName: "Menggatal",
    area: "menggatal",
    address: "Lot 42 Unit D-0-5 Ground Floor, Block D Taman Permai, Menggatal",
    phone: "016-826 8011",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b6db2ea1732b5",
    mapQuery: "SP Menggatal Taman Permai",
  },
  // --- Telipok area ---
  {
    id: "telipok",
    name: "SP Accessories Telipok",
    shortName: "Telipok",
    area: "telipok",
    address: "Lot SB-5 University Utama Square, Telipok",
    phone: "011-3639 1926",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323b13b3f3a69821",
    mapQuery: "SP University Utama Square Telipok",
  },
  // --- Sandakan ---
  {
    id: "sandakan",
    name: "SP Accessories Sandakan",
    shortName: "Sandakan",
    area: "sandakan",
    address: "Lot 1-D Sejati Walk, Sandakan",
    phone: "016-963 8011",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SMART+PHONE+ACCESSORIES+SDN+BHD/data=!4m7!3m6!1s0x3238dd5fa809c37f",
    mapQuery: "SMART PHONE ACCESSORIES SDN BHD Sejati Walk Sandakan",
  },
  // --- Kudat ---
  {
    id: "kudat",
    name: "SP Accessories Kudat",
    shortName: "Kudat",
    area: "kudat",
    address: "Block E-3A-0 Friendly Town Phase 1, Kudat",
    phone: "016-829 9711",
    hours: "10am - 10pm",
    mapUrl: "https://www.google.com/maps/place/SP/data=!4m7!3m6!1s0x323a0b1f2f506ddb",
    mapQuery: "SP Friendly Town Kudat",
  },
];

export const BRANCH_AREAS: BranchArea[] = [
  { id: "inanam", label: "Inanam", branches: ALL_BRANCHES.filter(b => b.area === "inanam") },
  { id: "kingfisher", label: "Kingfisher", branches: ALL_BRANCHES.filter(b => b.area === "kingfisher") },
  { id: "karamunsing", label: "Karamunsing", branches: ALL_BRANCHES.filter(b => b.area === "karamunsing") },
  { id: "sinsuran", label: "Sinsuran", branches: ALL_BRANCHES.filter(b => b.area === "sinsuran") },
  { id: "kk-city", label: "KK City", branches: ALL_BRANCHES.filter(b => b.area === "kk-city") },
  { id: "penampang", label: "Penampang / Megalong", branches: ALL_BRANCHES.filter(b => b.area === "penampang") },
  { id: "putatan", label: "Putatan", branches: ALL_BRANCHES.filter(b => b.area === "putatan") },
  { id: "menggatal", label: "Menggatal", branches: ALL_BRANCHES.filter(b => b.area === "menggatal") },
  { id: "telipok", label: "Telipok", branches: ALL_BRANCHES.filter(b => b.area === "telipok") },
  { id: "sandakan", label: "Sandakan", branches: ALL_BRANCHES.filter(b => b.area === "sandakan") },
  { id: "kudat", label: "Kudat", branches: ALL_BRANCHES.filter(b => b.area === "kudat") },
];

export const ALL_BRANCHES_FLAT = ALL_BRANCHES;

// Featured branches for homepage preview
export const PREVIEW_BRANCHES = [
  ALL_BRANCHES.find(b => b.id === "inanam-bc")!,
  ALL_BRANCHES.find(b => b.id === "karamunsing")!,
];
