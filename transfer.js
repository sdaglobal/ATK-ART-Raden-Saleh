/* ===========================================================
   ATK ART TRANSFER BARANG
   Version : 1.0
=========================================================== */


/* ===========================================================
   SUPABASE CONFIG
=========================================================== */

// ==========================
// RADEN SALEH
// ==========================

const RADEN_URL =
"https://wlnibcoqspxwmylkyolk.supabase.co";

const RADEN_KEY =
"ISI_PUBLISHABLE_KEY_RADEN";

/* ==========================
   MARGOMULYO
========================== */

const MARGO_URL =
"https://jihscriziqgeelgguhuf.supabase.co";

const MARGO_KEY =
"ISI_PUBLISHABLE_KEY_MARGO";

/* ==========================
   TRANSFER CENTER
========================== */

const TRANSFER_URL =
"https://zrftcvymxhqoevgmvmep.supabase.co";

const TRANSFER_KEY =
"ISI_PUBLISHABLE_KEY_TRANSFER";


/* ===========================================================
   DATABASE CONNECTION
=========================================================== */

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
TRANSFER_KEY);


/* ===========================================================
   GLOBAL VARIABLE
=========================================================== */

let SITE = "Raden Saleh";

let daftarBarang = [];

let daftarTransfer = [];

let detailTransfer = [];

let currentTransfer = null;


/* ===========================================================
   INIT
=========================================================== */

document.addEventListener("DOMContentLoaded", async ()=>{

    console.log("Transfer Ready");

});
