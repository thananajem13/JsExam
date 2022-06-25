$(document).ready(function()  {
    // let movieUrl = `https://api.themoviedb.org/3/movie/550?api_key=c084b948226574131705128f1e56303a`;
    let rowData = $('#rowData');
    
    
    let playingNowUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1`;
    let trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k`;
    let popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1`;
    let topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1`;
    let upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1`;
    fetchApi(playingNowUrl)
    // let results = {}
   async  function fetchApi(url){
    rowData.html('')
    // let getNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1`;
     
    let fetchApi = await fetch(url);
     let result = await fetchApi.json();
     console.log(result)
     window.results = result.results;
    let data ='';
    $.each(result.results,function(k,v){
        /** */
        data += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
    <div class="movie shadow rounded position-relative">
        <div class="post">
            <img class="movie-img" src="https://image.tmdb.org/t/p/w500${v.backdrop_path}"
                class="img-fluid rounded">
            <div
                class="layer align-items-center  text-center position-absolute w-100 h-100 start-0 top-100 ">
                <div class="info p-0">

                    <h2>${v.title}</h2>
                    <p>${v.overview}</p>
                    <p>rate: ${v.vote_average}</p>
                    <p>${v.release_date}</p>

                </div>
            </div>
        </div>
    </div>
</div>`;

rowData.append(data)
        /** */
        //console.log(`k: ${k}, v: ${v.backdrop_path}`)
    })
    rowData.html(data)
    //console.log(result)

   } 
   let rowSearchData = $('.row#rowSearch')
   $('#word').keyup(function(){
    console.log('keyup')
    // let rowSearchData = $('.row#rowSearch')
    //console.log($('.row#rowSearch').length)
    rowSearchData.html('')
    let  data = ''
    //console.log(typeof(window.results))
    console.log(window.results)
   let searchedMoviee =  window.results.filter((elem)=>{console.log(elem.title.includes($('#word').val()))
    return elem.title.includes($('#word').val())})
    console.log(searchedMoviee.length);
    if(searchedMoviee.length!=0){
        $.each(searchedMoviee,function(k,v){
        //console.log(v)
       data += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
    <div class="movie shadow rounded position-relative">
        <div class="post">
            <img class="movie-img" src="https://image.tmdb.org/t/p/w500${v.backdrop_path}"
                class="img-fluid rounded">
            <div
                class="layer align-items-center  text-center position-absolute w-100 h-100 start-0 top-100 ">
                <div class="info p-0">

                    <h2>${v.title}</h2>
                    <p>${v.overview}</p>
                    <p>rate: ${v.vote_average}</p>
                    <p>${v.release_date}</p>

                </div>
            </div>
        </div>
    </div>
</div>`; 

rowSearchData.append(data)
    });
    }
    //console.log(data)
    // rowSearchData.html(data) 
   })
console.log(window.results)
console.log($('#allMovies').length)
   
   $('#allMovies').keyup(function(){
    console.log('keyup allMovies ')
    let searUrl  =`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&query=${$(this).val()}&page=1&include_adult=false`;
    fetchApi(searUrl)
    //console.log($('.row#rowSearch').length)
//     rowData.html('')
//     let  data = ''
//     console.log((window.results))
//    let searchedMoviee =  window.results.filter((elem)=>{return elem.title.includes($(this).val());});
//     console.log(searchedMoviee)
//     // localStorage.setItem('searchDataRes',searchedMoviee)
//     // searchedMoviee = localStorage.getItem('searchDataRes')
//     $.each(searchedMoviee,function(k,v){
//         //console.log(v)
//        data = `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
//     <div class="movie shadow rounded position-relative">
//         <div class="post">
//             <img class="movie-img" src="https://image.tmdb.org/t/p/w500${v.backdrop_path}"
//                 class="img-fluid rounded">
//             <div
//                 class="layer align-items-center  text-center position-absolute w-100 h-100 start-0 top-100 ">
//                 <div class="info p-0">

//                     <h2>${v.title}</h2>
//                     <p>${v.overview}</p>
//                     <p>rate: ${v.vote_average}</p>
//                     <p>${v.release_date}</p>

//                 </div>
//             </div>
//         </div>
//     </div>
// </div>`; 
// console.log(data)
// // rowData.append(data)
// $('div#rowData.row').append(data)
// console.log(rowData)
//     });
    });
    //console.log(data)
    // rowSearchData.html(data)
   
    /**
     * https://api.themoviedb.org/3/movie/550?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDg0Yjk0ODIyNjU3NDEzMTcwNTEyOGYxZTU2MzAzYSIsInN1YiI6IjYyYjU3NWM2OWFlNjEzMDU4NDY4MWU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NLcXYCHMxBJ8gCgwEsyaM4uK5YHSSr-o-D6y5MJPs04
     */
    /**
     * 
     * get vedio:
     * https://api.themoviedb.org/3/movie/157336/videos?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * get details:
     * https://api.themoviedb.org/3/movie/157336?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * get alternative titke:
     * https://api.themoviedb.org/3/movie/157336/alternative_titles?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * get change 
     * https://api.themoviedb.org/3/movie/157336/changes?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * get cridet:
     * https://api.themoviedb.org/3/movie/157336/credits?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US
     * 
     * 
     * get external id:
     * https://api.themoviedb.org/3/movie/157336/external_ids?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * get images:
     * https://api.themoviedb.org/3/movie/157336/images?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US
     * 
     * get keywords:
     * https://api.themoviedb.org/3/movie/157336/keywords?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * get lists:
     * https://api.themoviedb.org/3/movie/157336/lists?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1
     * 
     * 
     * get recommendation:
     * https://api.themoviedb.org/3/movie/157336/recommendations?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1
     * 
     * 
     * get realse date:
     * https://api.themoviedb.org/3/movie/157336/release_dates?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * 
     * get reviews:
     * https://api.themoviedb.org/3/movie/157336/reviews?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1
     * 
     * get similer moviee:
     * 
     * https://api.themoviedb.org/3/movie/157336/similar?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1
     * 
     * get translations:
     * https://api.themoviedb.org/3/movie/157336/translations?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * get watch provider:
     * https://api.themoviedb.org/3/movie/157336/watch/providers?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     * 
     * 
     * rate moviee:(post not get 
     * {
      "value": 8.5
    })
    https://api.themoviedb.org/3/movie/157336/rating?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k
     *
    
    delete rating (delete)
    https://api.themoviedb.org/3/movie/157336/rating?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k 
    
    get latest
    https://api.themoviedb.org/3/movie/157336/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US 
    
    get now playing:
    
    https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1 
     
    
    get popular:
    https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1 
     
    
    get top rated:
    https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1
     
    
    get upcoming:
    https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1yfhh6fUODdbXZbZJsldlXlsplEiCsEUz5VPAJvlAsTSAsHpSTIG-P94k&language=en-US&page=1
     
     */




    //add close and open class into nav-tab-menu class selector 
    $('.strip-toggel-menu').click(function () {
        var className = $('.strip-toggel-menu>i').attr('class');
        //console.log(className)
        if (className.includes("fa-align-justify")) {
            $('.nav-tab-menu').addClass("open-menu");
            $('.nav-tab-menu').removeClass("close-menu");
            $('.strip-toggel-menu>i').addClass('fa-xmark')
            $('.strip-toggel-menu>i').removeClass('fa-align-justify')
            $('.strip-header-nav').removeClass('start-0')
            // $('.nav-tab-menu li').addClass('open')
            // $('.nav-tab-menu li').removeClass('close')
            //  opacity: 1;
            // padding-top: 25px;
            $('.item1').animate({
                'paddingTop': '25px',
                'opacity': '1'
            }, 1000, function () {
                $('.item2').animate({
                    'paddingTop': '25px',
                    'opacity': '1'
                }, 1000, function () {
                    $('.item3').animate({
                        'paddingTop': '25px',
                        'opacity': '1'
                    }, 1000, function () {
                        $('.item4').animate({
                            'paddingTop': '25px',
                            'opacity': '1'
                        }, 1000, function () {
                            $('.item5').animate({
                                'paddingTop': '25px',
                                'opacity': '1'
                            }, 1000, function () {
                                $('.item6').animate({
                                    'paddingTop': '25px',
                                    'opacity': '1'
                                }, 1000);
                            });
                        });
                    });
                });
            });
        }
        else {
            $('.nav-tab-menu').removeClass("open-menu");

            $('.nav-tab-menu').addClass("close-menu");
            $('.strip-toggel-menu>i').removeClass('fa-xmark')
            $('.strip-toggel-menu>i').addClass('fa-align-justify')
            $('.strip-header-nav').addClass('start-0')
            // $('.nav-tab-menu li').addClass('close')
            // $('.nav-tab-menu li').removeClass('open')

            $('.item1').animate({
                'paddingTop': '500px',
                'opacity': '0'
            }, 1000, function () {
                $('.item2').animate({
                    'paddingTop': '500px',
                    'opacity': '0'
                }, 1000, function () {
                    $('.item3').animate({
                        'paddingTop': '500px',
                        'opacity': '0'
                    }, 1000, function () {
                        $('.item4').animate({
                            'paddingTop': '500px',
                            'opacity': '0'
                        }, 1000, function () {
                            $('.item5').animate({
                                'paddingTop': '500px',
                                'opacity': '0'
                            }, 1000, function () {
                                $('.item6').animate({
                                    'paddingTop': '500px',
                                    'opacity': '0'
                                }, 1000);
                            });
                        });
                    });
                });
            });
        }
    })

    /**
     * 
     * .post:hover .layer {
        display: flex,
        top: 0;
    }
     */
    $('.nav-item li a').click(function () {
        //console.log($(this).html())
        if ($(this).attr('href') == "#contact") {
            $('body,html').scroll(function () {
                $("html, body").animate({ scrollTop: $(document).height() }, 1000);
            })
        }
        else {
            $('body,html').scroll(function () {
                $("html, body").animate({ scrollTop: 0 }, 1000);
            })
        } 
        // $(this).eq(index)
        if($(this).html()=="Now playing"){
            fetchApi(playingNowUrl)
        }
        else if($(this).html()=="Popular"){
            fetchApi(popularUrl)
        }
        else if($(this).html()=="Top Rated"){
            fetchApi(topRatedUrl)
        }
        else if($(this).html()=="Trending"){
            fetchApi(trendingUrl)
        }
        else if($(this).html()=="Upcoming"){
            fetchApi(upcomingUrl)
        }
    })
    /*
    if(name.length!=0 &&email.length!=0 &&phone.length!=0 &&age.length!=0 &&pass.length!=0 &&rePass.length!=0 ){
            $('#my-input-id').prop('disabled', false);
        }
        else{
            $('#my-input-id').prop('disabled', true);
        }
           */

    $('#name').keyup(function () {
        if (validateName($(this).val())) {
            $('#namealert').addClass('d-none')
        }
        else {
            $('#namealert').removeClass('d-none')
        }
    })

    $('#email').keyup(function () {
        if (validateEmail($(this).val())) {
            $('#emailalert').addClass('d-none')
        }
        else {
            $('#emailalert').removeClass('d-none')
        }
    })

    $('#phone').keyup(function () {
        if (validatePhoneNumber($(this).val())) {
            $('#phonealert').addClass('d-none')
        }
        else {
            $('#phonealert').removeClass('d-none')
        }
    })

    $('#age').keyup(function () {
        if (validateAge($(this).val())) {
            $('#agealert').addClass('d-none')
        }
        else {
            $('#agealert').removeClass('d-none')
        }
    })

    $('#password').keyup(function () {
        if (validatePass($(this).val())) {
            $('#passwordalert').addClass('d-none')
        }
        else {
            $('#passwordalert').removeClass('d-none')
        }
    })

    $('#rePassword').keyup(function () {
        if (validateRePass($(this).val(), $('#password').val())) {
            $('#repasswordalert').addClass('d-none')
        }
        else {
            $('#repasswordalert').removeClass('d-none')
        }
    })
    $('#contact input').keyup(function () {
        //console.log('key up')
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let age = $('#age').val();
        let pass = $('#password').val();
        let rePass = $('#rePassword').val()
        if (name.length != 0 && email.length != 0 && phone.length != 0 && age.length != 0 && pass.length != 0 && rePass.length != 0) {
            $('#submitBtn').attr('disabled', false);
        }
        else {
            $('#submitBtn').attr('disabled', true);
        }
    })

    $("#submitBtn").click(function () {
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let age = $('#age').val();
        let pass = $('#password').val();
        let rePass = $('#rePassword').val()
let err=false;
        if (validateName(name)) {
            $('#namealert').addClass('d-none');
            err=false;
        }
        else {
            $('#namealert').removeClass('d-none');
            err=true;
        }

        if (validateEmail(email)) {
            $('#emailalert').addClass('d-none');
            err=false;
        }
        else {
            $('#emailalert').removeClass('d-none');
            err=true;
        }

        if (validatePhoneNumber(phone)) {
            $('#phonealert').addClass('d-none');
            err=false;
        }
        else {
            $('#phonealert').removeClass('d-none');
            err=true;
        }

        if (validateAge(age)) {
            $('#agealert').addClass('d-none');
            err=false;
        }
        else {
            $('#agealert').removeClass('d-none');
            err=true;
        }

        if (validatePass(pass)) {
            $('#passwordalert').addClass('d-none');
            err=false;
        }
        else {
            $('#passwordalert').removeClass('d-none');
            err=true;
        }

        if (validateRePass(rePass, pass)) {
            $('#repasswordalert').addClass('d-none');
            err=false;
        }
        else {
            $('#repasswordalert').removeClass('d-none');
            err=true;
        }
        if(!err){
            alert('success send with truth input value ... Excellent ^_^')
        }
        clearInputVal();

    })
    function clearInputVal(){
        $('#contact input').val('');
    }
    function validateRePass(rePass, pass) {
        if (rePass === pass) {
            return true
        }
        return false
    }
    function validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    function validateName(name) {
        let regex = /^[a-zA-Z .'_]{2,30}[0-9]*$/;
        return regex.test(name);
    }

    function validatePhoneNumber(phoneNo) {
        let eqyptPhoneno = /^01[0-2]\s*\d{7}$/;
        if (eqyptPhoneno.test(phoneNo)) {
            return true;
        }
        else {
            return false;
        }
    }
    function validateAge(age) {
        let ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][0-9][0-9]|200)$/;
        if (ageRegex.test(age)) {
            return true;
        }
        else {
            return false;
        }
    }

    function validatePass(pass) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z !@#\$%\^\&*\)\(+=._\-\d]{8,}$/;
        if (passRegex.test(pass)) {
            return true;
        }
        else {
            return false;
        }
    }

})

