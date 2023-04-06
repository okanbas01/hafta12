import { useEffect, useState } from 'react';
import KisiListe from './KisiListe';
import Loading from './Loading';

function App() {
  const [yukleniyor, yukleniyorGuncelle] = useState(true);

  const kisiler = [
    { ad: 'Ali', yas: 25, cinsiyet: 'erkek' },
    { ad: 'Ayşe', yas: 32, cinsiyet: 'kadın' },
    { ad: 'Mehmet', yas: 41, cinsiyet: 'erkek' },
    { ad: 'Fatma', yas: 19, cinsiyet: 'kadın' },
    { ad: 'Ahmet', yas: 50, cinsiyet: 'erkek' },
    { ad: 'Zeynep', yas: 28, cinsiyet: 'kadın' },
    { ad: 'Emre', yas: 37, cinsiyet: 'erkek' },
    { ad: 'Seda', yas: 22, cinsiyet: 'kadın' },
    { ad: 'Mustafa', yas: 46, cinsiyet: 'erkek' },
    { ad: 'Deniz', yas: 29, cinsiyet: 'kadın' },
  ];

  useEffect(() => {
    let zamanlayici = setTimeout(() => {
      yukleniyorGuncelle(false);
    }, 2000);
    return () => {
      clearTimeout(zamanlayici);
    };
  }, []);
  return (
    <>{yukleniyor === true ? <Loading /> : <KisiListe kisiler={kisiler} />}</>
  );
}

export default App;
