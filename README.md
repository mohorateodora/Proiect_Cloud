<h1>Proiect Cloud Computing</h1>

<p>Aplicație de gestionare a cărților dintr-un anticariat online în Cloud Computing </p>

<h2>1. Introducere</h2>

<p>Am realizat această aplicație web, hostată cu ajutorul platformei Vercel, care gestionează cărțile dintr-un magazin online de tip anticariat. Anticariatul reprezintă un magazin ce se ocupă cu achiziționarea și colecționarea cărților vechi sau la mâna a doua și revânzarea acestora la un preț semnificativ mai mic decât prețul inițial, și anume prețul la care se poate cumpăra produsul în stare nouă, nefolosită. Aplicația este destinată persoanelor care se ocupă cu întreținerea și gestionarea anticariatului, deoarece ele pot vizualiza toate cărțile existente și detaliile importante despre acestea. În aplicație sunt listate doar cărțile care se află în stoc, cele care nu mai sunt disponibile fiind șterse. Am utilizat ca bază de date MongoDB Cloud, împreună cu tool-ul Compass pentru desktop, așadar cele două tipuri de servicii în cloud folosite sunt MongoDB și Vercel.</p>

<h2>2.	Descriere problemă</h2>

<p>Prezenta aplicație își propune să rezolve problema gestionării eficiente a volumelor existente la nivelul anticariatului. Fiind un magazin care vinde produse la mâna a doua, înseamnă că există decăt un singur exemplar din fiecare, iar produsele sunt într-un număr foarte mare. Odată ce acestea sunt vândute, ele trebuie șterse, deoarece este puțin probabil să mai fie adus în stoc același exemplar cu exact aceleași caracteristici, așadar volumul de date cu care lucrăm este unul uriaș.</p>
<p>Dezvoltarea aplicației de gestionare a cărților ajută personalul anticariatului să vizualizeze doar cărțile care se află în stoc în acel moment, le pot șterge pe cele care s-au vândut și nu mai sunt de actualitate sau le pot modifica pe cele existente în cazul în care există erori la caracteristicile produsului ori au primit un exemplar foarte asemănător cu ceva existent. De asemenea aceștia pot adăuga cărți noi atunci când este necesar.</p>

<h2>3.	Descriere tehnologii cloud folosite</h2>

<p>Pentru partea de baze de date am folosit MongoDB Cloud, care este o bază de date concepută pentru a simplifica procesul de gestionare a infrastructurii și de administrare a bazelor de date MongoDB în cloud. De aici am folosit serviciul MongoDB Atlas care permite utilizatorilor să creeze, să configureze și să gestioneze clustere MongoDB în cloud.Am implementat metodele CRUD (Create, Read, Update, Delete) astfel încât să pot interoga o colecție de date. M-am folosti de API-ul clusterul creat în MongoDB Cloud pentru a crea o conexiune cu MongoDB Compass. API-ul creat l-am folosit și pentru pentru a prelua datele din baza de date create pentru care l-am salvat în fișierul .env cu denumirea NEXT_ATLAS_DATABASE.</p>
<p>Vercel am folosit pentru a găzdui aplicația mea in mediul online. Această platformă este bazată pe dezvoltarea și livrarea rapidă a aplicațiilor web și aplicațiile statice, folosind tehnologii precum HTML, CSS și JavaScript. Este integrat cu framework-ul Next.js, care este un cadru React.js pentru construirea aplicațiilor web și a site-urilor interactive.</p>
<p>Am conectat contul de Vercel cu cel de GitHub pentru a putea să public aplicația mea pe un site web, iar link-ul aferent publicării pe platforma Vercel este: https://proiect-cloud-tau.vercel.app/ </p>
<p>Platforma GitHub am utilizat-o pentru a publica codul sursă al proiectului meu într-un repository. GitHub este o platformă care facilitează colaborarea între dezvoltatori, gestionarea proiectelor și stabilește controlul versiunilor codului sursă. Repository-ul (depozit) este locul care găzduiește codul sursă și locul unde se poate vedea întregul istoric al modificărilor, erorilor, pull requests-urilor sau alte aspecte legate de un proiect. Aceste depozite pot fi publice sau private. Cele publice pot fi văzute și clonate de toată lumea, iar cele private pot fi accesate doar de autor sau de colaboratorii pe care acesta îi invită. În proiectul de care l-am realizat am folosit conexiunea la contul meu de GitHub pentru a putea salva într-un loc sigur aplicația și am realizat mai multe commit-uri pentru a fi sigură că, în cazul în care ceva nu mai funcționează, mă pot întoarce oricând la versiunile salvate pe GitHub.</p>
<p>Link-ul repository-ului proiectului meu de Cloud Computing pentru aplicația de gestionare a cărților dintr-un anticariat online este: 
https://github.com/mohorateodora/Proiect_Cloud 
</p>
<p>Pentru o vizualizare mai facilă a funcționalităților soluției mele am realizat o prezentare salvată pe YouTube la categoria 'Nelistat', unde se poate vedea workflow-ului aplicației, disponibilă pe link-ul: https://youtu.be/1STzH6OsbT4 </p>
<h2>4.	Capturi ecran aplicație </h2>
<p>Interfața aplicației cu cărțile introduse de administratori.</p>
![image](https://github.com/mohorateodora/Proiect_Cloud/assets/72292100/2d26e737-6baa-4b78-bf8c-15ccb04560b9)
<p>Baza de date din MongoDB</p>
![2](https://github.com/mohorateodora/Proiect_Cloud/assets/72292100/9f5fa05d-372c-47bf-b7ca-75527cffeead)
<p>Formularul de modificare a unei cărți cu toate valorile atributelor preluate:</p>
![3](https://github.com/mohorateodora/Proiect_Cloud/assets/72292100/dc1ac6cf-f685-4529-abcd-19ed41e2dbf4)
<p>Pagina inițială după modificarea prețului cărții Moromeții și ștergerea cărții Invitație la vals:</p>
![4](https://github.com/mohorateodora/Proiect_Cloud/assets/72292100/5670055f-293c-4bd6-8a21-d7932ae4f150)
<p>Baza de date MongoDB după aceste modificări:</p>
![5](https://github.com/mohorateodora/Proiect_Cloud/assets/72292100/61f4390a-350e-4174-b917-921a75f9eac3)


