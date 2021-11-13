function cariFilm() {

$('#daftar-film').html('');

	//jalankan fungsi berikut ini 

	$.ajax({
		url 			: 'https://omdbapi.com',
		type 			: 'get',
		dataType		: 'json',
		data: {
			'apikey'	: 'f472db4',
			's'			: $('#input-pencarian').val()
		},
		success 		: function (result) {
			if (result.Response == "True") {
				let film = result.Search;
				
				//array film akan kita looping menggunakan function berikut ini
				$.each(film, function(i, data){
					$('#daftar-film').append(`
						<div class="col-md-4">
							<div class="card mb-3">
							  <img src="`+ data.Poster +`" class="card-img-top" alt="...">
							  <div class="card-body">
							    <h5 class="card-title">`+ data.Title +`</h5>
							    <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
							    <a href="#" class="btn btn-dark btn-block lihat-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">Lihat Detail</a>
							  </div>
							</div>
						</div>
						`);
				});

				//$('#input-pencarian').val('');

			} else {
				$('#daftar-film').html(`
						<div class="col">
							<h1 class="text-center">Film Tidak Ditemukan</h1>
						</div>
					`);
			}
		}

	});

}


//jQuery tolong carikan saya element dengan id yang bernama input-pencarian

$('#tombol-cari').on('click', function() {
	cariFilm();
});

$('#input-pencarian').on('keyup', function(e) {
	if (e.keyCode === 13) {
		cariFilm();
	}
});

$('#daftar-film').on('click', '.lihat-detail', function (){
	$.ajax({
		url				: 'https://omdbapi.com',
		type 			: 'get',
		dataType		: 'json',
		data 			: {
			'apikey'	: 'f472db4',
			'i'			: $(this).data('id')
		},
		success			: function (datafilm) {

			if (datafilm.Response === "True") {

				$('.modal-body').html(`
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-4">
								<img src="`+ datafilm.Poster +`" class="img-fluid">
							</div>
							<div class="col-md-8">
								<ul class="list-group">
								  <li class="list-group-item"><h4>`+ datafilm.Title +`</h4></li>
								  <li class="list-group-item">Rilis : `+ datafilm.Released +`</h4></li>
								  <li class="list-group-item">Durasi : `+ datafilm.Runtime +`</h4></li>
								  <li class="list-group-item">Genre : `+ datafilm.Genre +`</h4></li>
								  <li class="list-group-item">Director : `+ datafilm.Director +`</h4></li>
								  <li class="list-group-item">Penulis : `+ datafilm.Writer +`</h4></li>
								  <li class="list-group-item">Pemain : `+ datafilm.Actors +`</h4></li>
								  <li class="list-group-item">Alur Cerita : `+ datafilm.Plot +`</h4></li>
								  <li class="list-group-item">Bahasa : `+ datafilm.Language +`</h4></li>
								  <li class="list-group-item">Negara : `+ datafilm.Country +`</h4></li>
								  <li class="list-group-item">Penghargaan : `+ datafilm.Awards +`</h4></li>
								</ul>
							</div>
						</div>
					</div>
					`);

			}

		}
	});

	$('.modal-body').html('');

});
