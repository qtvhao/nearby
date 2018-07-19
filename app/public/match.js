(function () {
    var fetch = function () {
        var image = document.getElementsByClassName('recCard__img')[0].style.backgroundImage.replace('"','').replace('"','').replace(')','').replace('url(','');
        var recCardInfo = document.getElementsByClassName('recsCardboard__cards')[0].getElementsByClassName('active')[0].getElementsByClassName('recCard__info')[0];
        var age =  Number(recCardInfo.getElementsByClassName('Whs(nw)')[0].innerText.replace(/\D/gi,''));
        var name = recCardInfo.getElementsByClassName('Flw(w)')[0].innerText;

        document.body.style.backgroundImage = 'url(http://149.28.134.157/app/seed/create?image='+encodeURIComponent(image)+'&name='+encodeURIComponent(name)+'&age='+encodeURIComponent(age)+')';
    };
    setInterval(function () {
        fetch();
        document.getElementsByClassName('recsGamepad__button--like')[0].click();
    }, 4234);
    setInterval(function () {
        fetch();
        document.getElementsByClassName('recsGamepad__button--dislike')[0].click();
    }, 15234);
})();
