// Tweetleri gizleyen fonksiyon
function konudisiTweetleriGizle() {
  // Sadece https://twitter.com/search?q=* adresinde çalışmasını sağlamak için kontrol ekle
  if (!window.location.href.includes('https://twitter.com/search?q=')) {
    return;
  }

  // Tüm tweetleri seç
  var tweetler = document.querySelectorAll('[data-testid="tweet"]');

  // Sayacı sıfırla
  var gizlenenTweetSayisi = 0;

  // Her bir tweet için döngü
  for (var i = 0; i < tweetler.length; i++) {
    var tweet = tweetler[i];
    var tweetMetni = tweet.innerText;

    // "#" sembolünün sayısını hesapla
    var hashtagSayisi = (tweetMetni.match(/#/g) || []).length;

    // "/" karakterinin sayısını hesapla
    var slashSayisi = (tweetMetni.match(/\//g) || []).length;

    // Belirli bir element içerisindeki metinleri seç
    var textler = document.querySelectorAll('#id__zcylyvnrbpj > div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-1bymd8e.r-bcqeeo.r-qvutc0 > span');
    var kullanilanTextSayisi = 0;

    // Her bir text için döngü
    for (var j = 0; j < textler.length; j++) {
      var text = textler[j].innerText;
      
      // Metinde geçen kelime sayısını kontrol et
      var kelimeSayisi = (tweetMetni.match(new RegExp(text, 'gi')) || []).length;
      
      // Eğer metinde kelime geçiyorsa kullanılan text sayısını artır
      if (kelimeSayisi > 0) {
        kullanilanTextSayisi++;
      }
    }

    // Hashtag veya slash sayısı 1'den büyükse veya kullanılan text sayısı 2'den fazlaysa tweeti gizle
    if (hashtagSayisi > 1 || slashSayisi > 1 || kullanilanTextSayisi > 1) {
      tweet.style.display = 'none';
      gizlenenTweetSayisi++;
    }
  }

  // Gizlenen tweet sayısını popup olarak göster
  var popup = document.createElement('div');
  popup.innerHTML = " Dev Not: Eklenti çalıştı, " + gizlenenTweetSayisi + " adet tweet gizlendi.";
  popup.style.cssText = 'position: fixed; top: 10px; right: 10px; background: #3A6EA5; padding: 10px; border: 1px solid #fff; z-index: 9999; font-family: Inter; color: white; border-radius: 8px;';
  document.body.appendChild(popup);
   // Sayfayı şişirmemek için düzenli olarak
  setTimeout(function() {
    popup.remove();
  }, 1000);
}

// Kodun çalışması için tetikleyiciler
window.addEventListener('scroll', konudisiTweetleriGizle);
window.addEventListener('load', konudisiTweetleriGizle);
window.addEventListener('resize', konudisiTweetleriGizle);
window.addEventListener('mousemove', konudisiTweetleriGizle);
window.addEventListener('change', konudisiTweetleriGizle);
window.addEventListener('mouseover', konudisiTweetleriGizle);
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(konudisiTweetleriGizle, 3000);
});
