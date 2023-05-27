// Tweetleri gizleyen fonksiyon
function gizliTweetleriGizle() {
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
  
      // Hashtag veya slash sayısı 1'den büyükse tweeti gizle
      if (hashtagSayisi > 1 || slashSayisi > 2) {
        tweet.style.display = 'none';
        gizlenenTweetSayisi++;
      }
    }
  
    // Gizlenen tweet sayısını popup olarak göster
    var popup = document.createElement('div');
    popup.innerHTML = "Eklenti çalıştı, " + gizlenenTweetSayisi + " kadar tweet gizlendi.";
    popup.style.cssText = 'position: fixed; top: 10px; right: 10px; background: #fff; padding: 10px; border: 1px solid #ccc; z-index: 9999;';
    document.body.appendChild(popup);
  }
  
  // Sayfa kaydırıldığında tweetleri gizleyen fonksiyonu tetikle
  window.addEventListener('scroll', gizliTweetleriGizle);
  
  // Sayfa yüklendiğinde ve yeniden boyutlandırıldığında tweetleri gizleyen fonksiyonu tetikle
  window.addEventListener('load', gizliTweetleriGizle);
  window.addEventListener('resize', gizliTweetleriGizle);
  