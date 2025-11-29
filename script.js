// Data Budaya
const budayaData = [
    {
        title: "Reog Ponorogo",
        daerah: "Kabupaten Ponorogo",
        asal: "Berakar dari legenda Ki Ageng Kutu sebagai bentuk sindiran terhadap raja Majapahit. Konon, Ki Ageng Kutu menciptakan seni Reog sebagai kritik halus terhadap pemerintahan yang dianggap tidak adil. Topeng dadak merak yang besar dan berat melambangkan kebesaran dan kekuatan yang harus dipertanggungjawabkan.",
        deskripsi: "Reog Ponorogo adalah kesenian tradisional yang menampilkan tarian barongan, jathil, warok, dan dadak merak dengan topeng raksasa berbobot 50-60 kg. Pertunjukan Reog penuh dengan simbolisme, mulai dari sosok Singo Barong yang melambangkan kekuatan, hingga para penari jathil yang menggambarkan pasukan berkuda. Musik gamelan yang mengiringi menciptakan suasana magis dan menegangkan.",
        img: "https://i.imgur.com/AiCj5OL.jpeg"
    },
    {
        title: "Ludruk",
        daerah: "Surabaya",
        asal: "Berkembang dari kesenian rakyat yang satir dan mengangkat cerita kehidupan sehari-hari masyarakat Jawa Timur. Ludruk lahir sebagai media hiburan sekaligus kritik sosial terhadap kehidupan masyarakat kota. Awalnya dipentaskan di alun-alun dan pasar untuk menghibur masyarakat kelas bawah.",
        deskripsi: "Ludruk adalah teater tradisional dengan tokoh Cak dan Ning yang ikonik, berisi humor, kritik sosial, dan tarian remo yang energik. Pertunjukan Ludruk selalu dimulai dengan tari remo pembuka, dilanjutkan dengan adegan lawakan yang menggelitik, dan diakhiri dengan lakon drama yang menyentuh kehidupan nyata. Bahasa yang digunakan adalah bahasa Jawa Suroboyoan yang khas dan mudah dipahami.",
        img: "https://i.imgur.com/oHNuB7R.jpeg"
    },
    {
        title: "Tari Remo",
        daerah: "Jombang",
        asal: "Tarian pembangkit semangat prajurit pada masa kerajaan kuno di Jawa Timur. Tari Remo konon diciptakan untuk memompa adrenalin dan keberanian para prajurit sebelum berperang. Gerakan-gerakan tegas dan dinamis mencerminkan jiwa pemberani dan pantang menyerah para kesatria.",
        deskripsi: "Tari Remo menampilkan gerakan tegas dan dinamis dengan kostum berwarna cerah, didominasi oleh hentakan kaki yang kuat dan ekspresif. Penari remo harus memiliki stamina tinggi karena tariannya penuh energi dan kekuatan. Setiap gerakan mengandung makna filosofis tentang keberanian, kejantanan, dan kehormatan. Musik gamelan yang mengiringi berirama cepat dan menghentak.",
        img: "https://i.imgur.com/DAqmPpQ.jpeg"
    },
    {
        title: "Karapan Sapi",
        daerah: "Madura",
        asal: "Berawal dari lomba masyarakat petani untuk meningkatkan kualitas ternak sapi. Tradisi ini muncul dari kebiasaan para petani Madura yang saling adu kecepatan sapi mereka saat membajak sawah. Seiring waktu, tradisi ini berkembang menjadi kompetisi bergengsi yang menjadi kebanggaan setiap desa.",
        deskripsi: "Karapan Sapi adalah perlombaan sapi berpasangan yang ditarik di lintasan tanah sepanjang 100-120 meter, menjadi simbol kehormatan masyarakat Madura. Sapi-sapi yang dilombakan dirawat dengan istimewa, diberi pakan khusus, dan dilatih secara intensif. Joki yang mengendalikan harus memiliki keberanian dan keterampilan tinggi karena kecepatan sapi bisa mencapai 50 km/jam. Pemenang karapan sapi mendapat penghormatan tinggi di masyarakat.",
        img: "https://i.imgur.com/qihit7Q.jpeg"
    },
    {
        title: "Gandrung Banyuwangi",
        daerah: "Banyuwangi",
        asal: "Persembahan rasa syukur atas hasil panen dan penghormatan terhadap Dewi Sri sebagai dewi kesuburan. Gandrung awalnya merupakan ritual agraris yang dilakukan oleh masyarakat Using di Banyuwangi. Tarian ini berkembang menjadi pertunjukan seni yang menggambarkan keindahan dan keanggunan wanita Banyuwangi.",
        deskripsi: "Gandrung Banyuwangi adalah tarian cinta dengan gerakan lembut dan gemulai, diiringi musik gamelan Osing yang khas, serta kostum tradisional Banyuwangi yang penuh warna. Penari gandrung mengenakan kain batik dan selendang sutra dengan hiasan bunga melati di kepala. Pertunjukan gandrung sering melibatkan interaksi dengan penonton yang diajak menari bersama. Tarian ini menggambarkan rayuan cinta yang halus dan penuh kesopanan.",
        img: "https://i.imgur.com/myu0LuK.jpeg"
    },
    {
        title: "Topeng Malang",
        daerah: "Malang",
        asal: "Terinspirasi dari cerita Panji dalam sejarah klasik Jawa yang populer sejak era Kerajaan Kediri dan Singosari. Topeng Malang berkembang sebagai media penyampaian cerita-cerita klasik kepada rakyat. Setiap topeng memiliki karakter unik yang mewakili tokoh-tokoh dalam cerita Panji.",
        deskripsi: "Topeng Malang adalah tarian drama yang menggunakan topeng berkarakter seperti Panji, Klana Sewandana, Gunung Sari, dan tokoh-tokoh lainnya. Setiap topeng memiliki warna dan ekspresi yang berbeda sesuai watak tokohnya. Pertunjukan Topeng Malang tidak hanya menampilkan tarian, tetapi juga dialog dan adegan dramatik. Musik gamelan Malangan yang mengiringi memiliki kekhasan tersendiri dengan tempo yang bervariasi sesuai suasana cerita.",
        img: "https://i.imgur.com/ScZGXub.jpeg"
    }
];

// Interactive Mode Data
const interactiveMode = {
    isActive: false,
    currentStep: 0,
    visitedSections: {
        budaya: false,
        galeri: false,
        map: false
    },
    originalButtons: null,
    steps: [
        {
            title: "Selamat Datang",
            content: "Halo! Saya Eljavana, maskot Budaya Jawa Timur. Mari kita jelajahi kekayaan budaya Jawa Timur bersama-sama! Klik tombol di bawah untuk memulai eksplorasi.",
            voiceText: "Halo! Saya Eljavana, maskot Budaya Jawa Timur. Mari kita jelajahi kekayaan budaya Jawa Timur bersama-sama!"
        },
        {
            title: "Bagian A: Daftar Budaya",
            content: "Bagian pertama adalah Daftar Budaya. Di sini kamu akan menemukan berbagai kesenian tradisional dari berbagai daerah di Jawa Timur, seperti Reog Ponorogo, Tari Remo, Topeng Malang, dan masih banyak lagi!",
            voiceText: "Bagian pertama adalah Daftar Budaya. Di sini kamu akan menemukan berbagai kesenian tradisional dari berbagai daerah di Jawa Timur, seperti Reog Ponorogo, Tari Remo, Topeng Malang, dan masih banyak lagi!",
            action: "budaya"
        },
        {
            title: "Bagian B: Galeri Foto",
            content: "Bagian kedua adalah Galeri Foto. Kamu bisa melihat koleksi foto-foto indah dari berbagai pertunjukan budaya dan kesenian tradisional Jawa Timur. Setiap foto menceritakan kisah unik dari budaya kita!",
            voiceText: "Bagian kedua adalah Galeri Foto. Kamu bisa melihat koleksi foto-foto indah dari berbagai pertunjukan budaya dan kesenian tradisional Jawa Timur. Setiap foto menceritakan kisah unik dari budaya kita!",
            action: "galeri"
        },
        {
            title: "Bagian C: Peta Interaktif",
            content: "Bagian ketiga adalah Peta Interaktif. Di sini kamu bisa mengeklik setiap daerah di Jawa Timur untuk mempelajari budaya, makanan khas, tarian tradisional, dan bahasa lokal dari setiap daerah!",
            voiceText: "Bagian ketiga adalah Peta Interaktif. Di sini kamu bisa mengeklik setiap daerah di Jawa Timur untuk mempelajari budaya, makanan khas, tarian tradisional, dan bahasa lokal dari setiap daerah!",
            action: "map"
        },
        {
            title: "Terima Kasih!",
            content: "Terima kasih telah menjelajahi Budaya Jawa Timur bersama saya! Semoga kamu telah belajar banyak tentang kekayaan budaya kita. Sampai jumpa lagi!",
            voiceText: "Terima kasih telah menjelajahi Budaya Jawa Timur bersama saya! Semoga kamu telah belajar banyak tentang kekayaan budaya kita. Sampai jumpa lagi!"
        }
    ]
};

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Down Button
document.querySelector('.scroll-down').addEventListener('click', () => {
    document.querySelector('#budaya').scrollIntoView({
        behavior: 'smooth'
    });
});

// Modal Functionality
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const budayaCards = document.querySelectorAll('.budaya-card');

budayaCards.forEach(card => {
    card.querySelector('.btn-detail').addEventListener('click', () => {
        const id = card.dataset.id;
        const data = budayaData[id];

        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-daerah').textContent = data.daerah;
        document.getElementById('modal-asal').textContent = data.asal;
        document.getElementById('modal-deskripsi').textContent = data.deskripsi;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Galeri Modal
const galeriItems = document.querySelectorAll('.galeri-item');

galeriItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        document.getElementById('modal-img').src = img.src;
        document.getElementById('modal-title').textContent = 'Galeri Budaya Jawa Timur';
        document.getElementById('modal-daerah').textContent = '';
        document.getElementById('modal-asal').textContent = '';
        document.getElementById('modal-deskripsi').textContent = '';
        
        // Hide detail items for gallery
        document.querySelectorAll('.detail-item').forEach(item => {
            item.style.display = 'none';
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Reset modal on close
closeModalBtn.addEventListener('click', () => {
    document.querySelectorAll('.detail-item').forEach(item => {
        item.style.display = 'block';
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Maskot Functionality dengan Interactive Mode
const maskotContainer = document.querySelector('.maskot-container');
const maskotAvatar = document.querySelector('.maskot-avatar');
const speechBubble = document.querySelector('.speech-bubble');
const closeBubble = document.querySelector('.close-bubble');
const welcomeMessage = document.querySelector('.welcome-message');
const speechBtns = document.querySelectorAll('.speech-btn');
const maskotBadge = document.querySelector('.maskot-badge');

// Show welcome message after 2 seconds
setTimeout(() => {
    welcomeMessage.classList.add('active');
    
    // Hide welcome message after 5 seconds
    setTimeout(() => {
        welcomeMessage.classList.remove('active');
    }, 3000);
}, 500);

// Toggle speech bubble & Play opening narration
maskotAvatar.addEventListener('click', () => {
    if (!speechBubble.classList.contains('active')) {
        // Check if user is at hero section (beranda)
        const hero = document.querySelector('.hero');
        const heroPosition = hero.getBoundingClientRect().top;
        const isAtHero = heroPosition >= -100 && heroPosition <= window.innerHeight;
        
        // Play opening narration only if at hero section
        if (isAtHero) {
            speakText("Halo! Saya Eljavana, maskot Budaya Jawa Timur. Selamat datang di website Budaya Jawa Timur, mari jelajahi budaya jawa timur bersama sama. klik tombol di bawah ini untuk mulai menjelajahi");
        }
    }
    
    speechBubble.classList.toggle('active');
    welcomeMessage.classList.remove('active');
    
    // Hide badge after first click
    if (maskotBadge) {
        maskotBadge.style.display = 'none';
    }
});

// Start Interactive Mode
function startInteractiveMode() {
    interactiveMode.isActive = true;
    interactiveMode.currentStep = 0;
    
    // Simpan button asli sebelum diganti
    const speechOptions = speechBubble.querySelector('.speech-options');
    if (!interactiveMode.originalButtons) {
        interactiveMode.originalButtons = speechOptions.innerHTML;
    }
    
    // Update speech bubble untuk mode interaktif
    updateInteractiveContent();
    speechBubble.classList.add('active');
}

// Update Interactive Content
function updateInteractiveContent() {
    const step = interactiveMode.steps[interactiveMode.currentStep];
    
    // Update title
    speechBubble.querySelector('h4').innerHTML = `<i class="fas fa-smile-beam"></i> ${step.title}`;
    
    // Update content
    speechBubble.querySelector('p').textContent = step.content;
    
    // Update buttons
    const speechOptions = speechBubble.querySelector('.speech-options');
    speechOptions.innerHTML = '';
    
    // Hide interactive mode button saat mode aktif
    if (interactiveModeBtn) {
        interactiveModeBtn.style.display = 'none';
    }
    
    if (interactiveMode.currentStep < interactiveMode.steps.length - 1) {
        // Tombol untuk bagian A, B, C
        if (step.action) {
            const actionBtn = document.createElement('button');
            actionBtn.className = 'speech-btn';
            actionBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Lihat ${step.title}`;
            actionBtn.addEventListener('click', () => {
                // Navigate to section
                const sectionMap = {
                    budaya: '#budaya',
                    galeri: '#galeri',
                    map: '#map'
                };
                
                document.querySelector(sectionMap[step.action]).scrollIntoView({ behavior: 'smooth' });
                interactiveMode.visitedSections[step.action] = true;
                
                // Move to next step
                setTimeout(() => {
                    interactiveMode.currentStep++;
                    updateInteractiveContent();
                    speakText(interactiveMode.steps[interactiveMode.currentStep].voiceText);
                }, 1000);
            });
            speechOptions.appendChild(actionBtn);
        }
    } else {
        // Tombol penutup
        const closeBtn = document.createElement('button');
        closeBtn.className = 'speech-btn';
        closeBtn.innerHTML = `<i class="fas fa-check"></i> Selesai`;
        closeBtn.addEventListener('click', () => {
            interactiveMode.isActive = false;
            interactiveMode.currentStep = 0;
            
            // Kembalikan button asli
            restoreOriginalButtons();
            
            speechBubble.classList.remove('active');
        });
        speechOptions.appendChild(closeBtn);
    }
    
    // Speak the text
    speakText(step.voiceText);
}

// Function to restore original buttons and their listeners
function restoreOriginalButtons() {
    const speechOptions = speechBubble.querySelector('.speech-options');
    if (interactiveMode.originalButtons) {
        speechOptions.innerHTML = interactiveMode.originalButtons;
        
        // Show interactive mode button kembali
        if (interactiveModeBtn) {
            interactiveModeBtn.style.display = 'block';
            // Re-attach event listener ke tombol Mode Interaktif
            interactiveModeBtn.addEventListener('click', () => {
                startInteractiveMode();
            });
        }
        
        // Re-attach event listeners to restored buttons
        const restoredBtns = speechOptions.querySelectorAll('.speech-btn:not(#interactive-mode-btn)');
        restoredBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                if (interactiveMode.isActive) return;
                
                const action = this.dataset.action;
                
                if (action === 'budaya') {
                    document.querySelector('#budaya').scrollIntoView({ behavior: 'smooth' });
                } else if (action === 'galeri') {
                    document.querySelector('#galeri').scrollIntoView({ behavior: 'smooth' });
                } else if (action === 'map') {
                    document.querySelector('#map').scrollIntoView({ behavior: 'smooth' });
                } else if (action === 'tentang') {
                    document.querySelector('#tentang').scrollIntoView({ behavior: 'smooth' });
                }
                
                setTimeout(() => {
                    speechBubble.classList.remove('active');
                }, 500);
            });
        });
    }
}

// Close speech bubble
closeBubble.addEventListener('click', (e) => {
    e.stopPropagation();
    speechBubble.classList.remove('active');
});

// Speech button actions with narration
const narrationMap = {
    budaya: "Bagian pertama adalah Daftar Budaya. Di sini kamu akan menemukan berbagai kesenian tradisional dari berbagai daerah di Jawa Timur, seperti Reog Ponorogo, Tari Remo, Topeng Malang, dan masih banyak lagi!",
    galeri: "Bagian kedua adalah Galeri Foto. Kamu bisa melihat koleksi foto-foto indah dari berbagai pertunjukan budaya dan kesenian tradisional Jawa Timur. Setiap foto menceritakan kisah unik dari budaya kita!",
    map: "Bagian ketiga adalah Peta Interaktif. Di sini kamu bisa mengeklik setiap daerah di Jawa Timur untuk mempelajari budaya, makanan khas, tarian tradisional, dan bahasa lokal dari setiap daerah!",
    tentang: "Bagian ini berisi informasi tentang website dan misi kami untuk melestarikan budaya Jawa Timur. Mari bersama-sama menjaga warisan budaya leluhur kita agar tetap hidup dan berkembang di era modern."
};

speechBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        
        // Play narration for this section
        if (narrationMap[action]) {
            speakText(narrationMap[action]);
        }
        
        // Navigate to section
        if (action === 'budaya') {
            document.querySelector('#budaya').scrollIntoView({ behavior: 'smooth' });
        } else if (action === 'galeri') {
            document.querySelector('#galeri').scrollIntoView({ behavior: 'smooth' });
        } else if (action === 'map') {
            document.querySelector('#map').scrollIntoView({ behavior: 'smooth' });
        } else if (action === 'tentang') {
            document.querySelector('#tentang').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Close bubble after navigation
        setTimeout(() => {
            speechBubble.classList.remove('active');
        }, 500);
    });
});

// Close bubble when clicking outside
document.addEventListener('click', (e) => {
    if (!maskotContainer.contains(e.target)) {
        speechBubble.classList.remove('active');
    }
});

// Text-to-Speech Function
function speakText(text) {
    const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;
    
    if (SpeechSynthesisUtterance) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        window.speechSynthesis.speak(utterance);
    }
}

// Map Interaktif Functionality
const budayaDataMap = {
    surabaya: {
        nama: "Surabaya",
        icon: "🏛️",
        tarian: "Tari Remo",
        makanan: "Rujak Cingur",
        bahasa: "Jawa Arek",
        budaya: "Ludruk",
        deskripsi: "Surabaya dikenal sebagai Kota Pahlawan dengan budaya Arek yang khas. Tari Remo adalah tarian pembuka yang energik dengan gerakan dinamis. Rujak Cingur menjadi ikon kuliner dengan cita rasa unik perpaduan sayur dan moncong sapi. Ludruk sebagai teater tradisional yang sarat humor dan kritik sosial masih lestari hingga kini.",
        img: "https://i.imgur.com/oHNuB7R.jpeg"
    },
    malang: {
        nama: "Malang",
        icon: "🎭",
        tarian: "Topeng Malangan",
        makanan: "Bakso Malang",
        bahasa: "Jawa Malangan",
        budaya: "Topeng Malang",
        deskripsi: "Malang memiliki kesenian Topeng yang berakar dari cerita Panji. Setiap topeng memiliki karakter unik dengan filosofi mendalam. Bakso Malang terkenal dengan kuah kaldu yang gurih dan isian yang beragam. Bahasa Jawa Malangan memiliki kekhasan tersendiri yang berbeda dengan daerah lain.",
        img: "https://i.imgur.com/gVtPk2N.jpeg"
    },
    banyuwangi: {
        nama: "Banyuwangi",
        icon: "🌾",
        tarian: "Gandrung",
        makanan: "Sego Tempong",
        bahasa: "Osing",
        budaya: "Janger & Kebo-keboan",
        deskripsi: "Banyuwangi adalah rumah suku Osing dengan Tari Gandrung yang memikat. Gandrung adalah tarian persembahan untuk Dewi Sri dengan gerakan lembut dan anggun. Sego Tempong terkenal dengan sambal pedasnya yang menggigit. Kebo-keboan adalah ritual unik yang melambangkan rasa syukur kepada alam.",
        img: "https://i.imgur.com/8AxYoXY.jpeg"
    },
    kediri: {
        nama: "Kediri",
        icon: "🍴",
        tarian: "Jathilan",
        makanan: "Pecel Kediri",
        bahasa: "Jawa Mataraman",
        budaya: "Gethek Festival",
        deskripsi: "Kediri terkenal dengan Tari Jathilan yang menggambarkan keperkasaan pasukan berkuda. Pecel Kediri memiliki bumbu kacang yang khas dan gurih. Gethek Festival adalah perayaan budaya di atas rakit bambu yang unik. Bahasa Jawa Mataraman di Kediri halus dan sopan."
    },
    jember: {
        nama: "Jember",
        icon: "👗",
        tarian: "Can-macanan Kaddu",
        makanan: "Suwar-suwir",
        bahasa: "Jawa–Madura campuran",
        budaya: "Jember Fashion Carnaval",
        deskripsi: "Jember terkenal dengan Jember Fashion Carnaval (JFC) yang mendunia. Can-macanan Kaddu adalah tarian tradisional yang menggambarkan kehidupan petani. Suwar-suwir adalah olahan daging yang gurih dan lezat. Bahasa di Jember merupakan perpaduan unik Jawa dan Madura."
    },
    madiun: {
        nama: "Madiun",
        icon: "👹",
        tarian: "Dongkrek",
        makanan: "Pecel Madiun",
        bahasa: "Jawa Mataraman",
        budaya: "Reog Gagrak Madiun",
        deskripsi: "Madiun memiliki Tari Dongkrek yang energik dengan topeng unik. Pecel Madiun terkenal dengan bumbu kacangnya yang legendaris. Reog Gagrak Madiun berbeda dengan Ponorogo dengan ciri khas tersendiri. Madiun adalah kota dengan budaya Jawa Mataraman yang kuat."
    },
    ponorogo: {
        nama: "Ponorogo",
        icon: "🦁",
        tarian: "Reog Ponorogo",
        makanan: "Sate Ponorogo",
        bahasa: "Jawa Mataraman",
        budaya: "Warok–Gemblak Tradisi",
        deskripsi: "Ponorogo adalah tanah kelahiran Reog yang megah dan mendunia. Dadak Merak dengan bobot 50-60 kg menjadi ikon kesenian ini. Sate Ponorogo memiliki bumbu khas yang berbeda dari sate lainnya. Tradisi Warok melambangkan kekuatan spiritual dan kebijaksanaan.",
        img: "https://i.imgur.com/16UX6Iu.jpeg"
    },
    madura: {
        nama: "Madura",
        icon: "🐂",
        tarian: "Muang Sangkal",
        makanan: "Sate Madura",
        bahasa: "Madura",
        budaya: "Karapan Sapi",
        deskripsi: "Madura terkenal dengan Karapan Sapi yang menjadi kebanggaan masyarakat. Sate Madura dengan bumbu kacang khasnya terkenal di seluruh Indonesia. Tari Muang Sangkal menggambarkan kehidupan nelayan Madura. Bahasa Madura memiliki keunikan tersendiri dengan logat yang kental.",
        img: "https://i.imgur.com/HLhlC4f.jpeg"
    },
    blitar: {
        nama: "Blitar",
        icon: "🇮🇩",
        tarian: "Gambyong",
        makanan: "Pecel Blitar",
        bahasa: "Jawa Mataraman",
        budaya: "Pusara Bung Karno",
        deskripsi: "Blitar adalah kota kelahiran Presiden Soekarno. Tari Gambyong adalah tarian klasik Jawa yang anggun dan lembut. Pecel Blitar memiliki cita rasa yang khas dengan sambel tumpang yang gurih. Makam Bung Karno menjadi situs bersejarah yang penting."
    },
    pasuruan: {
        nama: "Pasuruan",
        icon: "⛰️",
        tarian: "Topeng Tengger",
        makanan: "Rawon Setan",
        bahasa: "Jawa Arek",
        budaya: "Yadnya Kasada Tengger",
        deskripsi: "Pasuruan adalah gerbang menuju Gunung Bromo dan Tengger. Upacara Yadnya Kasada adalah ritual persembahan kepada Sang Hyang Widhi. Rawon Setan terkenal dengan kuah hitam khas dan cita rasa yang kuat. Tari Topeng Tengger menggambarkan kehidupan masyarakat pegunungan."
    },
    probolinggo: {
        nama: "Probolinggo",
        icon: "🌊",
        tarian: "Glipang",
        makanan: "Nasi Rawon Probolinggo",
        bahasa: "Jawa Arek dialek pesisir",
        budaya: "Jaran Bodhag",
        deskripsi: "Probolinggo memiliki pesona alam pegunungan dan pantai. Tari Glipang adalah tarian tradisional yang menggambarkan kehidupan masyarakat pesisir. Rawon Probolinggo memiliki kekhasan rasa yang berbeda. Jaran Bodhag adalah kesenian kuda lumping khas yang energik dan magis."
    }
};

const modalMap = document.getElementById('modal-map');
const regionsMap = document.querySelectorAll('.region-map');

regionsMap.forEach((region) => {
    region.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const regionName = this.getAttribute('data-region');
        openMapModal(regionName);
    });
});

function openMapModal(regionName) {
    const data = budayaDataMap[regionName];
    
    if (!data) {
        console.error('Data not found for:', regionName);
        return;
    }
    
    document.getElementById('modal-title-map').textContent = data.nama;
    document.getElementById('modal-tarian-map').textContent = data.tarian;
    document.getElementById('modal-makanan-map').textContent = data.makanan;
    document.getElementById('modal-bahasa-map').textContent = data.bahasa;
    document.getElementById('modal-budaya-map').textContent = data.budaya;
    document.getElementById('modal-deskripsi-map').textContent = data.deskripsi;
    
    // Update modal image
    const modalImageMap = document.getElementById('modal-image-map');
    if (data.img) {
        modalImageMap.innerHTML = `<img src="${data.img}" alt="${data.nama}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">`;
    } else {
        modalImageMap.innerHTML = `<span id="modal-icon-map">${data.icon}</span>`;
    }
    
    modalMap.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMapModal() {
    modalMap.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal saat klik di luar
modalMap.addEventListener('click', function(e) {
    if (e.target === modalMap) {
        closeMapModal();
    }
});

// Close dengan ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalMap.classList.contains('active')) {
        closeMapModal();
    }
});

// Galeri Simple Swipe Slider (No Infinite Loop)
const swipeContainers = document.querySelectorAll('.swipe-container');

swipeContainers.forEach((container) => {
    const track = container.querySelector('.swipe-track');
    
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let startTime = 0;
    let hasMoved = false;
    
    // Get boundaries
    function getMaxTranslate() {
        const trackWidth = track.scrollWidth;
        const containerWidth = container.offsetWidth;
        return -(trackWidth - containerWidth);
    }
    
    // Event listeners
    track.addEventListener('touchstart', dragStart, { passive: true });
    track.addEventListener('touchmove', dragMove, { passive: false });
    track.addEventListener('touchend', dragEnd);
    
    track.addEventListener('mousedown', dragStart);
    track.addEventListener('mousemove', dragMove);
    track.addEventListener('mouseup', dragEnd);
    track.addEventListener('mouseleave', () => {
        if (isDragging) dragEnd();
    });
    
    track.addEventListener('contextmenu', e => e.preventDefault());
    
    function dragStart(e) {
        isDragging = true;
        hasMoved = false;
        startTime = Date.now();
        startX = getPositionX(e);
        currentTranslate = prevTranslate;
        
        track.classList.add('dragging');
    }
    
    function dragMove(e) {
        if (!isDragging) return;
        
        const currentPosition = getPositionX(e);
        const diff = currentPosition - startX;
        
        if (Math.abs(diff) > 5) {
            hasMoved = true;
            e.preventDefault();
        }
        
        currentTranslate = prevTranslate + diff;
        
        // Apply boundaries
        const maxTranslate = getMaxTranslate();
        if (currentTranslate > 0) {
            currentTranslate = 0;
        } else if (currentTranslate < maxTranslate) {
            currentTranslate = maxTranslate;
        }
        
        track.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function dragEnd(e) {
        if (!isDragging) return;
        
        isDragging = false;
        track.classList.remove('dragging');
        
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        
        // Check if it's a tap (not a drag)
        if (!hasMoved || (Math.abs(currentTranslate - prevTranslate) < 5 && timeTaken < 200)) {
            const clickedSlide = e.target.closest('.galeri-item-swipe');
            if (clickedSlide) {
                openGaleriModal(clickedSlide);
            }
            currentTranslate = prevTranslate;
            track.style.transform = `translateX(${currentTranslate}px)`;
            return;
        }
        
        // Apply final boundaries
        const maxTranslate = getMaxTranslate();
        if (currentTranslate > 0) {
            currentTranslate = 0;
        } else if (currentTranslate < maxTranslate) {
            currentTranslate = maxTranslate;
        }
        
        prevTranslate = currentTranslate;
        track.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            currentTranslate = 0;
            prevTranslate = 0;
            track.style.transform = 'translateX(0)';
        }, 100);
    });
});

// Modal function for galeri
function openGaleriModal(item) {
    const img = item.querySelector('img');
    const existingModal = document.querySelector('.modal');
    
    if (existingModal) {
        document.getElementById('modal-img').src = img.src;
        document.getElementById('modal-title').textContent = 'Galeri Budaya Jawa Timur';
        document.getElementById('modal-daerah').textContent = '';
        document.getElementById('modal-asal').textContent = '';
        document.getElementById('modal-deskripsi').textContent = '';
        
        document.querySelectorAll('.detail-item').forEach(item => {
            item.style.display = 'none';
        });
        
        existingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
