function Hitung(x){
    var explode =x.split("-");
    
        // Menampilkan tanggal, bulan, tahun
        var hari = explode[2];
        var tahun = explode[0];
        var bulan = ["", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        
        if (explode[1] == "10" || explode[1] == "11" || explode[1] == "12"){
            var bln=explode[1];
        }else {
            bln=explode[1].substr(1,1);
        }
            bln = bulan[bln];

        var date = [hari, bln, tahun];

    // Menentukan Hari Masehi
    if (explode[0]%4 == 0){
		a = ['',31,29,31,30,31,30,31,31,30,31,30,31]
    }
	else {
		a = ['',31,28,31,30,31,30,31,31,30,31,30,31]
    }

    var siklus = Math.floor((explode[0]-1)/4);
    var sisaSiklus = (explode[0]-1) % 4;
    
     if (sisaSiklus !== 0 ){
         sisaSiklus = sisaSiklus * 365;
        }
    var hariSiklus = siklus * 1461;
        var w = explode[1];
        
        var q = 0;
            for(var i=1; i<w; i++){
                q = q+a[i];
            }
        var haridalamTahun = q + parseInt(explode[2]);

    var jumlahHari = hariSiklus + sisaSiklus + haridalamTahun;

    //Koreksi Gregorius dan selisih hijriyah dan masehi

    var selisihdankoreksi = 227029;
    jumlahHari = jumlahHari - selisihdankoreksi;
  
    // Masehi
    var xmasehi = jumlahHari % 7;

    // Pasaran
    var xpasaran = jumlahHari % 5;

    var day = ["Kamis", "Jum'at","Sabtu","Minggu","Senin","Selasa","Rabu","Kamis"]
    var pasaran = ["Kliwon","Legi","Pahing","Pon","Wage","Kliwon"]

    var ankday = [8,6,9,5,4,3,7,8]
    var ankpasaran = [8,5,9,7,4,8]

    var angkaWeton = ankday[xmasehi]+ankpasaran[xpasaran];

    return [date, day[xmasehi], pasaran[xpasaran], angkaWeton];
}


function weton(x){
    var pegat = [1,9,10,18,19,27,28,36,'PEGAT','"Hasil pegat, bahwa menurut hitungan weton jawa kemungkinan pasangan akan sering mendapatkan masalah di kemudian hari, bisa saja masalah ekonomi, kekuasaan, perselingkuhan hingga menyebabkan pasangan bercerai."']

    var ratu = [2,11,20,29,'RATU','"Hasil Ratu, menurut hitungan weton jawa bisa dikatakan bahwa pasangan ini memang sudah jodohnya. Karena didalam kehidupan nanti keluarganya akan sangat dihargai dan disegani oleh tetangga maupun masyarakat sekitar. Bahkan banyak orang yang iri hati karena keharmonisannya dalam membina rumah tangga."']

    var jodo = [3,12,21,30,'JODOH','"Hasil Jodoh, menurut hitungan weton jawa pasangan ini memang beneran cocok dan berjodoh. Karena dapat saling menerima baik kelebihan atau kekurangannya. Selain itu rumah tangganya dapat rukun sampai tua nanti."']

    var topo = [4,13,22,31,'TOPO','"Hasil Topo, menurut hitungan jawa di gambarkan dalam membina rumah tangga nanti akan mengalami kesusahan di awal, tetapi akan bahagia di akhir nanti. Masalah ini bisa saja karena masalah ekonomi dan masih banyak lagi. Namun ketika sudah mempunyai anak dan cukup lama berumah tangga, di hari itulah kehidupanya akan menjadi sukses dan bahagia."']

    var tinari = [5, 14, 23, 32,'TINARI','"Hasil Tinari, menurut hitungan weton jawanya berarti akan menemukan kebehagaiaan dimasa nanti. Selain itu gampang dalam mencari rezeki dan sering mendapatkan keberuntungan."']

    var padu = [6, 15, 24, 33,'PADU','"Hasil Padu, menurut hitungan weton jawa digambarkan dalam berumah tangganya nanti akan sering mengalami sebuah pertengkaran. Namun tidak sampai mengarah ke sebuah perceraian. Masalah pertengkaran ini digambarkan hanya masalah yang sifatnya cukup sepele."']

    var sujanan = [7, 16, 25, 34,'SUJANAN','"Hasil sujanan, menurut hitungan weton jawa digambarkan bahwa dalam berumah tangganya nanti akan mengalami sebuah pertengkaran, bisa saja kerana perselingkuhan yang terjadi yang di mulai dari pahak laki-laki atau si perempuan."']

    var pesthi = [8, 17, 26, 35,'PESTHI','"Hasil Pesthi, menurut hitungan weton jawa digambarkan bahwa dalam berumah tangganya nanti akan selalu rukun, tenteram, adem ayem hingga tua nanti. Meskipun ada masalah, namun tidak akan bisa merusak keharmonisan keluarganya."']


    if(pegat.some(item => item == x)){
        return [pegat[8], pegat[9], "FFC4C8"];
    }else if(ratu.some(item => item == x)){
        return [ratu[4], ratu[5], "C6FFC2"];
    }else if(jodo.some(item => item == x)){
        return [jodo[4], jodo[5], "C6FFC2"];
    }else if(topo.some(item => item == x)){
        return [topo[4], topo[5], "E5E4C7"];
    }else if(tinari.some(item => item == x)){
        return [tinari[4], tinari[5], "E5E4C7"];
    }else if(padu.some(item => item == x)){
        return [padu[4], padu[5], "FFC4C8"];
    }else if(sujanan.some(item => item == x)){
        return [sujanan[4], sujanan[5], "FFC4C8"];
    }else if(pesthi.some(item => item == x)){
        return [pesthi[4], pesthi[5], "C6FFC2"];
    }
}


$('#submit').on('click', function () {
    $("#result").html("");

     //validasi nama
     var nama = $("#inputNama1").val().length;
     var nama2 = $("#inputNama2").val().length;
     if (nama == 0) {			
         document.getElementById('nama-alert').innerHTML = "Nama tidak boleh kosong :)";
         //return false;
     }else{
         document.getElementById('nama-alert').innerHTML = "";
     }
     if (nama2 == 0) {			
         document.getElementById('nama2-alert').innerHTML = "Waduh Pasanganmu kok kosong?";
         //return false;
     }else{
         document.getElementById('nama2-alert').innerHTML = "";
     }

    //validasi tanggal
    var alertTgl1 = $("#inputTanggal1").val().length;
    var alertTgl2 = $("#inputTanggal2").val().length;
        if (alertTgl1 == 0) {			
            document.getElementById('tanggal-alert').innerHTML = "Tanggalnya diisi dulu gaes";
            //return false;
        }else{
            document.getElementById('tanggal-alert').innerHTML = "";
        }
        if (alertTgl2 == 0) {			
            document.getElementById('tanggal2-alert').innerHTML = "Tanggalnya diisi dulu gaes";
            //return false;
        }else{
            document.getElementById('tanggal2-alert').innerHTML = "";
        }
   $("#result").html("");

    var nama1 = $('#inputNama1').val();
    var nama2 = $('#inputNama2').val();	

    var tanggal1 = $('#inputTanggal1').val();
    var tanggal2 = $('#inputTanggal2').val();
    
    var layla = Hitung(tanggal1);

    var majnun = Hitung(tanggal2);
    
    
	
    var total = layla[3]+majnun[3];
    var final = weton(total)

    $("#result").append(`                    
    
<div class='weton'>
    <tbody>
                Nama Kamu&nbsp; &nbsp; : <b>`+nama1+`</b><br/>
                Tanggal Lahir &nbsp;: <b>`+layla[0][0]+` `+layla[0][1]+` `+layla[0][2]+` </b><br/>
                Pasaran&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : <b>`+layla[1]+ ` `+layla[2]+` </b>  <br/>
                Neptu&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : <b>`+layla[3]+` </b>
           
<i class='separate'></i>    
            
                Pasangan Kamu : <b>`+nama2+`</b><br/>
                Tanggal Lahir&nbsp; &nbsp; &nbsp;: <b>`+majnun[0][0]+` `+majnun[0][1]+` `+majnun[0][2]+` </b><br/>
                Pasaran&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   : <b> `+majnun[1]+ ` `+majnun[2]+` </b><br/>
                Neptu&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : <b> `+majnun[3]+`  </b>
</tbody>
 
 <hr>
  <div class='promo'>Jadi <i>Neptu</i> kamu :  <b>`+layla[3]+`</b> 
  dan neptu pasanganmu : <b>`+majnun[3]+`</b> , 
  <i>Wetonnya</i> ketemu <b>`+total+`</b></div> </div>   
                       
<center><div class='note1'><h4>`+final[0]+`  (`+total+`) </h4></div></center>
<div class='note'>
`+final[1]+`
<div class='block-author'>
    <div class='block-img'>
      <img class='lazy' alt='Author' data-src='https://1.bp.blogspot.com/-TJveDHmopf8/YAczjGBH28I/AAAAAAAAHts/Ypusd4262wgzQAzJySOLp_jrldMW2_enwCLcBGAsYHQ/s1134/blangkon.png' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='/>
    </div>
    
  <div class='block-info'><span class='block-name'>Dikutip dari berbagai sumber</span><span class='block-desc'>Source Code by <a href="https://www.panjinawangkung.com">KENTHUS</a><br>
     Made with <svg class='svg-icon' width='10' height='10' viewBox='0 0 20 20'>
<path d='M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61'></path>
</svg> in JaTim, ID
    </span>
    </div>
  </div>


            
                     `);
                     
    $('#myModal').modal('show');
   

})
