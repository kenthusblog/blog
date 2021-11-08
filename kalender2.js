var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	var hari = ["Minggu",	"Senin",	"Selasa",	"Rabu",	"Kamis",	"Jum'at",	"Sabtu"];

	var select_year = document.querySelector(".years");
	for (var i = 1938; i < 2078; i++) {
		select_year.options[select_year.options.length] = new Option(i, i);
	}

	var now = new Date();
	var month_now = now.getMonth();
	var year_now = now.getFullYear();

	var select_month = document.querySelector(".months option[value='"+ month_now +"']");
	select_month.selected = true;

	var select_year = document.querySelector(".years option[value='"+ year_now +"']");
	select_year.selected = true;

	document.getElementById('btn-result').addEventListener("click", function(){
		clearAll();
		var year_selected = document.getElementById('select-year').value;
		year_selected = parseInt(year_selected);
		var month_selected = document.getElementById('select-month').value;
		month_selected = parseInt(month_selected);
		generate_table(month_selected, year_selected);
	});

	generate_table(month_now, year_now);
	function generate_table(month_now, year_now) {
		var java_months = ["Sura", "Sapar", "Mulud", "Bakda Mulud", "Jumadilawal", "Jumadilakir", "Rejeb", "Ruwah", "Pasa", "Sawal", "Sela", "Besar" ];
		var first_date = new Date(year_now, month_now, 1);
		var last_date = new Date(year_now, month_now + 1, 0);

		var title_today = document.querySelector("h4.title-today");
		var java_today = HijriJS.gregorianToHijri(now.getFullYear(), (now.getMonth() + 1), now.getDate());
		title_today.textContent = hari[now.getDay()]+', '+ now.getDate() +' '+bulan[month_now]+' '+year_now+' / '+java_today.day+' '+java_months[java_today.month-1]+' '+java_today.year;

		var title_hijr = document.querySelector("h4.title-hijr");
		var first_h = HijriJS.gregorianToHijri(first_date.getFullYear(), (first_date.getMonth() + 1), first_date.getDate());
		first_h = first_h.day  +' '+ java_months[first_h.month - 1]  +' '+ first_h.year;
		var last_h =  HijriJS.gregorianToHijri(last_date.getFullYear(), (last_date.getMonth() + 1), last_date.getDate());
		last_h = last_h.day  +' '+ java_months[last_h.month - 1]  +' '+ last_h.year;

		title_hijr.textContent = first_h +' - '+ last_h;
		var max_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		var no_date = 1;
		var row_tbl = 0;
		var col_tbl = first_date.getDay();
		if (year_now % 4 == 0) {
			max_date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		}
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 7; j++) {
				if (no_date <= max_date[month_now]) {
					hijriDate = HijriJS.gregorianToHijri(first_date.getFullYear(), (first_date.getMonth() + 1), no_date);
					pasarJava = pasaran(first_date.getFullYear(), (first_date.getMonth()+1), no_date)
					mDateEll = document.querySelector(".tbl-hijr .row-"+ row_tbl +" .col-"+ col_tbl + ' .m-date');
					hDateEll = document.querySelector(".tbl-hijr .row-"+ row_tbl +" .col-"+ col_tbl + ' .h-date');
					mDateEll.textContent = no_date;
					hDateEll.textContent = hijriDate.day +' '+ pasarJava;
					if (first_date.getFullYear() +'/'+ (first_date.getMonth() + 1) +'/'+ no_date == now.getFullYear() +'/'+ (now.getMonth() + 1) +'/'+ now.getDate()) {document.querySelector(".tbl-hijr .row-"+ row_tbl +" .col-"+ col_tbl ).style.background='#eee88e' .width:'100%' }
				}
				no_date++;
				col_tbl++;
				if (col_tbl > 6) {col_tbl = 0; row_tbl++;}
			}
				if (row_tbl > 7) {row_tbl = 0};
		}
	}

	function pasaran(y, m, d) {
	 var pasaran = new Array('Legi','Pahing','Pon','Wage','Kliwon',);
	 var d2 = new Date("1938/1/1");
	 var d1 = new Date(y +'/'+ m +'/'+ d);
	 var selisih = Math.floor(Math.abs(d1-d2)/86400000);
	 var pasar = pasaran[selisih%5];
	 return pasar;
	}
	
	function clearAll() {
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 7; j++) {
					document.querySelector(".tbl-hijr .row-"+ i +" .col-"+ j).style.background = "white";
					document.querySelector(".tbl-hijr .row-"+ i +" .col-"+ j + ' .m-date').textContent = '';
					document.querySelector(".tbl-hijr .row-"+ i +" .col-"+ j + ' .h-date').textContent = '';
			}
		}
	}
	
