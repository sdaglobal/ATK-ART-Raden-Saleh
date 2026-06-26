/* ==========================================================
   UTILS
========================================================== */

function getDatabase(site){

    if(site==="Raden Saleh"){

        return dbRaden;

    }

    if(site==="Margomulyo"){

        return dbMargo;

    }

    return dbRaden;

}


function formatTanggal(date){

    return new Date(date).toLocaleDateString("id-ID");

}


function formatJam(date){

    return new Date(date).toLocaleTimeString("id-ID");

}


function formatRupiah(number){

    return new Intl.NumberFormat(
        "id-ID"
    ).format(number);

}


function generateTransferNumber(){

    const now = new Date();

    const yyyy = now.getFullYear();

    const mm = String(
        now.getMonth()+1
    ).padStart(2,"0");

    const dd = String(
        now.getDate()
    ).padStart(2,"0");

    const hh = String(
        now.getHours()
    ).padStart(2,"0");

    const ii = String(
        now.getMinutes()
    ).padStart(2,"0");

    const ss = String(
        now.getSeconds()
    ).padStart(2,"0");

    return `TRF-${yyyy}${mm}${dd}-${hh}${ii}${ss}`;

}


function showLoading(){

    console.log("Loading...");

}


function hideLoading(){

    console.log("Done");

}
