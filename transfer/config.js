/* ==========================================================
   ATK / ART TRANSFER
   CONFIGURATION
========================================================== */

const APP = {

    NAME: "ATK / ART Transfer",

    VERSION: "1.0.0",

    SITE: "Raden Saleh"

};


/* ==========================================================
   SUPABASE
========================================================== */

/* -------------------------
   RADEN SALEH
-------------------------- */

const RADEN_URL =
"https://wlnibcoqspxwmylkyolk.supabase.co";

const RADEN_KEY =
"sb_publishable_lycr_Pk_EfTZxPmUJ3xsag_isf7AEwS";


/* -------------------------
   MARGOMULYO
-------------------------- */

const MARGO_URL =
"https://jihscriziqgeelgguhuf.supabase.co";

const MARGO_KEY =
"sb_publishable_MPe-jCU14P6QrCz5t6XXbg_OpOfqQm8";


/* -------------------------
   TRANSFER CENTER
-------------------------- */

const TRANSFER_URL =
"https://zrftcvymxhqoevgmvmep.supabase.co";

const TRANSFER_KEY =
"sb_publishable_aztUvAoVtFAg5J_gB3mmQg_SjWTFNcR";


/* ==========================================================
   DATABASE CONNECTION
========================================================== */

const dbRaden =
supabase.createClient(
    RADEN_URL,
    RADEN_KEY
);

const dbMargo =
supabase.createClient(
    MARGO_URL,
    MARGO_KEY
);

const dbTransfer =
supabase.createClient(
    TRANSFER_URL,
    TRANSFER_KEY
);


/* ==========================================================
   GLOBAL VARIABLE
========================================================== */

let daftarBarang = [];

let daftarTransfer = [];

let detailTransfer = [];

let currentTransfer = null;
