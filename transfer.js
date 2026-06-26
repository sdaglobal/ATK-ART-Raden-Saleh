/* ===========================================================
   ATK / ART TRANSFER BARANG
   Version : 1.1
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
"sb_publishable_lycr_Pk_EfTZxPmUJ3xsag_isf7AEwS";


// ==========================
// MARGOMULYO
// ==========================

const MARGO_URL =
"https://jihscriziqgeelgguhuf.supabase.co";

const MARGO_KEY =
"sb_publishable_MPe-jCU14P6QrCz5t6XXbg_OpOfqQm8";


// ==========================
// TRANSFER CENTER
// ==========================

const TRANSFER_URL =
"https://zrftcvymxhqoevgmvmep.supabase.co";

const TRANSFER_KEY =
"sb_publishable_aztUvAoVtFAg5J_gB3mmQg_SjWTFNcR";


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
   GLOBAL
=========================================================== */

let SITE = "Raden Saleh";

let daftarBarang = [];

let daftarTransfer = [];

let detailTransfer = [];

let currentTransfer = null;


/* ===========================================================
   INIT
=========================================================== */

document.addEventListener("DOMContentLoaded", async () => {

    console.log("Transfer Module Ready");

    await initApp();

});


/* ===========================================================
   INIT APP
=========================================================== */

async function initApp(){

    await loadBarang();

    await loadTransfer();

}


/* ===========================================================
   GET DATABASE SITE
=========================================================== */

function getDatabase(){

    const site =
    document.getElementById("siteAsal").value;

    if(site==="Raden Saleh"){

        return dbRaden;

    }

    return dbMargo;

}


/* ===========================================================
   LOAD BARANG
=========================================================== */

async function loadBarang(){

    const db = getDatabase();

    const {data,error}=await db

        .from("master_barang")
        .select("*")
        .order("nama",{ascending:true});

    if(error){

        console.error(error);

        alert(error.message);

        return;

    }

    daftarBarang=data || [];

    renderBarang();

}


/* ===========================================================
   RENDER BARANG
=========================================================== */

function renderBarang(){

    const select =
    document.getElementById("barang");

    select.innerHTML="";

    daftarBarang.forEach(item=>{

        select.innerHTML+=`

        <option value="${item.kode}">

            ${item.nama}

            (Stok : ${item.sisa_stok} ${item.satuan})

        </option>

        `;

    });

}


/* ===========================================================
   LOAD TRANSFER
=========================================================== */

async function loadTransfer(){

    const tbody =
    document.getElementById("transferList");

    tbody.innerHTML=`
    <tr>
        <td colspan="6">
            Loading...
        </td>
    </tr>
    `;

    const {data,error}=await dbTransfer

        .from("transfer_barang")
        .select("*")
        .order("id",{ascending:false});

    if(error){

        tbody.innerHTML=`
        <tr>
            <td colspan="6">
                ${error.message}
            </td>
        </tr>
        `;

        return;

    }

    daftarTransfer=data || [];

    renderTransfer();

}


/* ===========================================================
   RENDER TRANSFER
=========================================================== */

function renderTransfer(){

    const tbody =
    document.getElementById("transferList");

    tbody.innerHTML="";

    if(daftarTransfer.length===0){

        tbody.innerHTML=`
        <tr>
            <td colspan="6">
                Belum ada data
            </td>
        </tr>
        `;

        return;

    }

    daftarTransfer.forEach((item,index)=>{

        tbody.innerHTML+=`

        <tr>

            <td>${index+1}</td>

            <td>${item.no_transfer}</td>

            <td>${item.asal}</td>

            <td>${item.tujuan}</td>

            <td>${item.status}</td>

            <td>

                <button
                    onclick="detailTransfer('${item.id}')">

                    Detail

                </button>

            </td>

        </tr>

        `;

    });

}


/* ===========================================================
   DETAIL
=========================================================== */

function detailTransfer(id){

    console.log(id);

}


/* ===========================================================
   SIMPAN TRANSFER
=========================================================== */

function simpanTransfer(){

    alert("Tahap berikutnya");

}
