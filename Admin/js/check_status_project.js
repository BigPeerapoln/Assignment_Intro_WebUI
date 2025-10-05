document.addEventListener('DOMContentLoaded', () => {

    const projects = [
    // IT - 5 projects
    {
        id: 1,
        name_th: "ระบบจัดการงานเอกสารออนไลน์สำหรับองค์กร",
        name_en: "Online Document Management System for Organizations",
        major: "IT", sec: "A", topicStatus: "Passed_Topic", progressStatus: "Completed_100", finalStatus: "Signed_Complete",
        students: ["นายธนบูลย์ อิ่มเจริญ (6806022510017)", "นายวัชโรทัย เลิศวิลัย (6806022510025)"],
        advisor: "ผศ.นพดล บูรณ์กุศล", co_advisor: null,
        scope: "พัฒนา Web Application เพื่อจัดการเอกสารภายในองค์กร",
        comment: null,
    },
    {
        id: 2,
        name_th: "แอปพลิเคชันติดตามการออกกำลังกายบนมือถือ",
        name_en: "Mobile Fitness Tracking Application",
        major: "IT", sec: "A", topicStatus: "Passed_Revision", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นายพลากร แพทย์นุเคราะห์ (6806022510092)"],
        advisor: "รศ.ดร.อนิราช มิ่งขวัญ", co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
        scope: "ออกแบบและพัฒนาแอปพลิเคชันบนมือถือสำหรับบันทึกและวิเคราะห์การออกกำลังกาย",
        comment: "ปรับปรุงส่วนการออกแบบ UI/UX ให้ใช้งานง่ายขึ้น และเพิ่มฟังก์ชันการแชร์ผลลัพธ์",
    },
    {
        id: 3,
        name_th: "เว็บไซต์ขายสินค้าอิเล็กทรอนิกส์",
        name_en: "E-commerce Website for Electronics",
        major: "IT", sec: "B", topicStatus: "Failed_Topic", progressStatus: "In_Progress", finalStatus: "Incomplete",
        students: ["นายขรรค์ชัย ลิ้มประเสริฐ (6806022510033)"],
        advisor: "ผศ.ดร.ขนิษฐา นามี", co_advisor: null,
        scope: "สร้างเว็บไซต์สำหรับซื้อขายอุปกรณ์อิเล็กทรอนิกส์พร้อมระบบชำระเงินออนไลน์",
        comment: "หัวข้อกว้างเกินไป ควรเน้นไปที่การสร้างฟีเจอร์เด่นเฉพาะอย่าง เช่น ระบบแนะนำสินค้าอัจฉริยะ",
    },
    {
        id: 4,
        name_th: "ระบบจองห้องประชุมแบบครบวงจร",
        name_en: "Integrated Meeting Room Booking System",
        major: "IT", sec: "B", topicStatus: "Passed_Topic", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นางสาวกนกวรรณ ศรีประไชย (6806022510041)"],
        advisor: "ผศ.ดร.ขนิษฐา นามี", co_advisor: "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
        scope: "พัฒนาระบบสำหรับการจองห้องประชุมแบบเรียลไทม์",
        comment: null,
    },
    {
        id: 5,
        name_th: "แพลตฟอร์มการเรียนรู้ออนไลน์",
        name_en: "Online Learning Platform",
        major: "IT", sec: "C", topicStatus: "Passed_Topic", progressStatus: "Completed_100", finalStatus: "Passed_Final",
        students: ["นายลัทธพล ศิริหล้า (6806022510289)"],
        advisor: "ผศ.นพดล บูรณ์กุศล", co_advisor: null,
        scope: "ออกแบบและพัฒนาแพลตฟอร์มสำหรับสร้างและจัดการคอร์สเรียนออนไลน์",
        comment: null,
    },
    // ITI - 5 projects
    {
        id: 6,
        name_th: "ระบบควบคุมอุณหภูมิในโรงเรือนอัจฉริยะ",
        name_en: "Smart Greenhouse Temperature Control System",
        major: "ITI", sec: "A", topicStatus: "Passed_Topic", progressStatus: "Completed_100", finalStatus: "Passed_Final",
        students: ["นางสาวสุกัญญา มาพระยืน (6806022510211)"],
        advisor: "ผศ.นพดล บูรณ์กุศล", co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
        scope: "พัฒนา IoT System เพื่อควบคุมอุณหภูมิและความชื้นในโรงเรือน",
        comment: null,
    },
    {
        id: 7,
        name_th: "หุ่นยนต์ทำความสะอาดอัตโนมัติ",
        name_en: "Automatic Cleaning Robot",
        major: "ITI", sec: "A", topicStatus: "Passed_Topic", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นายนันทวัฒน์ นันทวิสาร (6806022510050)"],
        advisor: "รศ.ดร.อนิราช มิ่งขวัญ", co_advisor: null,
        scope: "สร้างหุ่นยนต์ทำความสะอาดที่สามารถทำงานได้เองโดยใช้เซ็นเซอร์",
        comment: null,
    },
    {
        id: 8,
        name_th: "ระบบรักษาความปลอดภัยอัจฉริยะ",
        name_en: "Smart Security System",
        major: "ITI", sec: "B", topicStatus: "Passed_Topic", progressStatus: "In_Progress", finalStatus: "Incomplete",
        students: ["นายก้องกาย วงษ์มอญ (6806022510319)"],
        advisor: "ผศ.ดร.ขนิษฐา นามี", co_advisor: "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
        scope: "ออกแบบระบบเฝ้าระวังและแจ้งเตือนภัยแบบอัตโนมัติ",
        comment: null,
    },
    {
        id: 9,
        name_th: "แขนกลสำหรับงานอุตสาหกรรมขนาดเล็ก",
        name_en: "Robotic Arm for Small-scale Industry",
        major: "ITI", sec: "B", topicStatus: "Passed_Revision", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นายกัณติกรณ์ สรสุริยวงษ์ (6806022510068)"],
        advisor: "ผศ.นพดล บูรณ์กุศล", co_advisor: null,
        scope: "พัฒนาแขนกลสำหรับหยิบจับและคัดแยกสิ่งของในสายการผลิต",
        comment: "เพิ่มการควบคุมการเคลื่อนที่ให้แม่นยำและเสถียรมากขึ้น",
    },
    {
        id: 10,
        name_th: "การพัฒนาระบบอัตโนมัติสำหรับรถยนต์",
        name_en: "Automotive Automation System Development",
        major: "ITI", sec: "C", topicStatus: "Failed_Topic", progressStatus: "In_Progress", finalStatus: "Incomplete",
        students: ["นายศิริโรจน์ อุดมเดช (6806022510271)"],
        advisor: "รศ.ดร.อนิราช มิ่งขวัญ", co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
        scope: "พัฒนาระบบช่วยขับขี่อัตโนมัติเบื้องต้น",
        comment: "ขอบเขตของโปรเจกต์ใหญ่เกินไปสำหรับระยะเวลา ควรเน้นไปที่ฟังก์ชันเฉพาะทางใดทางหนึ่ง",
    },
    // INE - 5 projects
    {
        id: 11,
        name_th: "การวิเคราะห์ข้อมูลเครือข่ายสังคม",
        name_en: "Social Network Data Analysis",
        major: "INE", sec: "A", topicStatus: "Passed_Topic", progressStatus: "Completed_100", finalStatus: "Passed_Final",
        students: ["นางสาวไรบีนา มะเก๊ะ (6806022510122)"],
        advisor: "ผศ.นพดล บูรณ์กุศล", co_advisor: null,
        scope: "สร้างเครื่องมือสำหรับวิเคราะห์และทำเหมืองข้อมูลจากเครือข่ายสังคม",
        comment: null,
    },
    {
        id: 12,
        name_th: "ระบบป้องกันการโจมตีทางไซเบอร์",
        name_en: "Cyber-attack Prevention System",
        major: "INE", sec: "A", topicStatus: "Passed_Topic", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นายธีรภัทร มังเทศ (6806022510238)"],
        advisor: "รศ.ดร.อนิราช มิ่งขวัญ", co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
        scope: "พัฒนาระบบตรวจจับและป้องกันการบุกรุกบนเครือข่าย",
        comment: null,
    },
    {
        id: 13,
        name_th: "การพัฒนาระบบแนะนำสินค้า",
        name_en: "Product Recommendation System Development",
        major: "INE", sec: "B", topicStatus: "Passed_Revision", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นางสาวณัชพร เก็งสาริกิจ (6806022510254)"],
        advisor: "ผศ.ดร.ขนิษฐา นามี", co_advisor: null,
        scope: "พัฒนาอัลกอริทึมสำหรับแนะนำสินค้าที่เหมาะสมกับผู้ใช้",
        comment: "เพิ่มการทดสอบและเปรียบเทียบประสิทธิภาพของอัลกอริทึมหลายๆ ตัว",
    },
    {
        id: 14,
        name_th: "การจัดการฐานข้อมูลขนาดใหญ่",
        name_en: "Big Data Management",
        major: "INE", sec: "C", topicStatus: "Passed_Topic", progressStatus: "Completed_100", finalStatus: "Signed_Complete",
        students: ["นายภูวดล เวชชนะ (6806022510131)", "นายพีรพล บัวขยาย (6806022510149)"],
        advisor: "ผศ.ดร.ขนิษฐา นามี", co_advisor: "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
        scope: "ศึกษาและพัฒนาวิธีการจัดการฐานข้อมูลขนาดใหญ่เพื่อเพิ่มประสิทธิภาพ",
        comment: null,
    },
    {
        id: 15,
        name_th: "ระบบประมวลผลภาษาธรรมชาติ",
        name_en: "Natural Language Processing System",
        major: "INE", sec: "C", topicStatus: "Passed_Topic", progressStatus: "In_Progress", finalStatus: "Incomplete",
        students: ["นายปุลินภัทร ประสิทธินอก (6806022510301)"],
        advisor: "ผศ.นพดล บูรณ์กุศล", co_advisor: null,
        scope: "พัฒนาระบบวิเคราะห์และทำความเข้าใจข้อความจากมนุษย์",
        comment: null,
    },
    // INET - 5 projects
    {
        id: 16,
        name_th: "การพัฒนาเกมเพื่อการศึกษา",
        name_en: "Educational Game Development",
        major: "INET", sec: "A", topicStatus: "Passed_Topic", progressStatus: "Completed_100", finalStatus: "Passed_Final",
        students: ["นายศตวรรษ บัวผัน (6806022510581)"],
        advisor: "รศ.ดร.อนิราช มิ่งขวัญ", co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
        scope: "สร้างเกมที่ช่วยในการเรียนรู้และทำความเข้าใจเนื้อหาทางวิทยาศาสตร์",
        comment: null,
    },
    {
        id: 17,
        name_th: "ระบบบริหารจัดการร้านอาหาร",
        name_en: "Restaurant Management System",
        major: "INET", sec: "A", topicStatus: "Passed_Topic", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นายไกรกูล แสงบุตรดี (6806022510599)"],
        advisor: "ผศ.ดร.ขนิษฐา นามี", co_advisor: null,
        scope: "พัฒนา Web Application เพื่อจัดการการสั่งอาหารและคิวลูกค้า",
        comment: null,
    },
    {
        id: 18,
        name_th: "เว็บไซต์สำหรับงาน Event",
        name_en: "Event Management Website",
        major: "INET", sec: "B", topicStatus: "Failed_Topic", progressStatus: "In_Progress", finalStatus: "Incomplete",
        students: ["นางสาวชาลิสา ยิ้มลำใย (6806022510653)"],
        advisor: "ผศ.นพดล บูรณ์กุศล", co_advisor: "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
        scope: "สร้างเว็บไซต์สำหรับลงทะเบียนและจัดการกิจกรรมต่างๆ",
        comment: "ควรเพิ่มความสามารถในการจัดการผู้เข้าร่วมและระบบแจ้งเตือนให้ครบถ้วน",
    },
    {
        id: 19,
        name_th: "ระบบการจัดการฐานข้อมูลสำหรับโรงพยาบาลขนาดเล็ก",
        name_en: "Database Management System for Small Hospitals",
        major: "INET", sec: "B", topicStatus: "Passed_Revision", progressStatus: "Progress_50", finalStatus: "Submitted_Final",
        students: ["นายสุทธิพงษ์ แช่มชื่น (6806022510602)", "นายวัจน์กร อินยู่ (6806022510611)"],
        advisor: "รศ.ดร.อนิราช มิ่งขวัญ", co_advisor: null,
        scope: "ออกแบบและสร้างฐานข้อมูลเพื่อจัดเก็บข้อมูลผู้ป่วยและประวัติการรักษา",
        comment: "เพิ่มการรักษาความปลอดภัยของข้อมูลผู้ป่วยตามมาตรฐานสากล",
    },
    {
        id: 20,
        name_th: "แอปพลิเคชันสำหรับควบคุมระบบไฟฟ้าภายในบ้าน",
        name_en: "Home Electrical System Control Application",
        major: "INET", sec: "C", topicStatus: "Passed_Topic", progressStatus: "Completed_100", finalStatus: "Signed_Complete",
        students: ["นายคฤษฐ์ เสือเดช (6806022510637)", "นายพงศ์พันธ์ หมันเทศมัน (6806022510645)"],
        advisor: "ผศ.ดร.ขนิษฐา นามี", co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
        scope: "พัฒนาแอปพลิเคชันเพื่อควบคุมอุปกรณ์ไฟฟ้าภายในบ้านผ่านสมาร์ทโฟน",
        comment: null,
    },
];

    const projectTableBody = document.getElementById('projectTable');
    const projectModal = document.getElementById('projectModal');
    const projectInfoContent = document.getElementById('projectInfoContent');
    const studentContent = document.getElementById('studentContent');
    const advisorContent = document.getElementById('advisorContent');
    const commentContent = document.getElementById('commentContent'); // Element สำหรับแสดงความคิดเห็น
    const commentSection = document.getElementById('commentSection'); // Section ทั้งหมดของความคิดเห็น

    const tabButtons = document.querySelectorAll('.tab-btn');
    const secFilter = document.getElementById('secFilter');
    const searchInput = document.getElementById('searchProject');
    const searchButton = document.getElementById('searchButton');
    const statusFilters = document.querySelectorAll('input[name="statusFilter"]');

    let currentMajor = 'all';
    let currentSec = 'all';
    let currentStatus = null;

    const statusMapping = {
        'Passed_Topic': 'สอบผ่านหัวข้อ',
        'Passed_Revision': 'ผ่านแบบแก้ไข',
        'Failed_Topic': 'ไม่ผ่านหัวข้อ',
        'In_Progress': 'เริ่มทำโครงงาน',
        'Progress_50': 'ดำเนินการคืบหน้า 50%',
        'Completed_100': 'คืบหน้า 100%',
        'Submitted_Final': 'ยื่นสอบจบ',
        'Passed_Final': 'สอบผ่านจบโครงงานโดยสมบูรณ์',
        'Failed_Final': 'สอบโครงงานจบไม่ผ่าน',
        'Signed_Complete': 'ลงนามสมบูรณ์'
    };

    function renderTable(filteredProjects) {
        projectTableBody.innerHTML = '';
        if (filteredProjects.length === 0) {
            projectTableBody.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-gray-500">ไม่พบข้อมูลโครงงาน</td></tr>`;
            return;
        }
        filteredProjects.forEach(project => {
            const row = document.createElement('tr');
            row.className = `border-b border-gray-200`; // Removed hover class
            const displayedStatus = getDisplayedStatus(project);

            row.innerHTML = `
                <td class="py-3 px-6 text-left whitespace-nowrap font-medium">${project.name_th}</td>
                <td class="py-3 px-6 text-left">${project.major} - ${project.sec}</td>
                <td class="py-3 px-6 text-left">
                    <span class="py-1 px-3 rounded-full text-xs font-medium ${getStatusBadgeClass(displayedStatus)}">
                        ${displayedStatus}
                    </span>
                </td>
                <td class="py-3 px-6 text-center">
                    <button class="bg-indigo-500 text-white py-1 px-3 rounded-md text-xs hover:bg-indigo-600 transition" onclick="openModal(${project.id})">
                        ดูรายละเอียด
                    </button>
                </td>
            `;
            projectTableBody.appendChild(row);
        });
    }

    function getDisplayedStatus(project) {
        if (currentStatus) {
            return statusMapping[currentStatus];
        }

        if (project.finalStatus && project.finalStatus !== 'Incomplete') {
            return statusMapping[project.finalStatus];
        } else if (project.progressStatus) {
            return statusMapping[project.progressStatus];
        } else if (project.topicStatus) {
            return statusMapping[project.topicStatus];
        }
        return 'ไม่ระบุสถานะ';
    }

    function getStatusBadgeClass(statusText) {
        if (statusText.includes('สอบผ่าน') || statusText.includes('คืบหน้า 100%') || statusText.includes('ลงนามสมบูรณ์')) {
            return 'bg-green-100 text-green-700';
        } else if (statusText.includes('แก้ไข') || statusText.includes('คืบหน้า') || statusText.includes('ยื่นสอบ') || statusText.includes('เริ่มทำ')) {
            return 'bg-yellow-100 text-yellow-700';
        } else if (statusText.includes('ไม่ผ่าน')) {
            return 'bg-red-100 text-red-700';
        }
        return 'bg-gray-200 text-gray-700';
    }
    
    function filterProjects() {
        let filtered = projects.filter(project => {
            const majorMatch = currentMajor === 'all' || project.major === currentMajor;
            const secMatch = currentSec === 'all' || project.sec === currentSec;
            const searchMatch = searchInput.value.trim() === '' || project.name_th.includes(searchInput.value.trim()) || project.name_en.toLowerCase().includes(searchInput.value.trim().toLowerCase());
            const statusMatch = !currentStatus || project.topicStatus === currentStatus || project.progressStatus === currentStatus || project.finalStatus === currentStatus;
            
            return majorMatch && secMatch && searchMatch && statusMatch;
        });
        renderTable(filtered);
    }

    function updateCounts() {
        document.getElementById('topic-passed-count').innerText = projects.filter(p => p.topicStatus === 'Passed_Topic').length;
        document.getElementById('topic-revision-count').innerText = projects.filter(p => p.topicStatus === 'Passed_Revision').length;
        document.getElementById('topic-failed-count').innerText = projects.filter(p => p.topicStatus === 'Failed_Topic').length;
        document.getElementById('progress-in-progress-count').innerText = projects.filter(p => p.progressStatus === 'In_Progress').length;
        document.getElementById('progress-50-count').innerText = projects.filter(p => p.progressStatus === 'Progress_50').length;
        document.getElementById('progress-100-count').innerText = projects.filter(p => p.progressStatus === 'Completed_100').length;
        document.getElementById('final-submitted-count').innerText = projects.filter(p => p.finalStatus === 'Submitted_Final').length;
        document.getElementById('final-passed-count').innerText = projects.filter(p => p.finalStatus === 'Passed_Final').length;
        document.getElementById('final-failed-count').innerText = projects.filter(p => p.finalStatus === 'Failed_Final').length;
        document.getElementById('final-signed-count').innerText = projects.filter(p => p.finalStatus === 'Signed_Complete').length;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentMajor = button.dataset.tab;
            filterProjects();
        });
    });

    secFilter.addEventListener('change', (e) => {
        currentSec = e.target.value;
        filterProjects();
    });

    searchButton.addEventListener('click', filterProjects);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            filterProjects();
        }
    });

    statusFilters.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentStatus = e.target.checked ? e.target.value : null;
            filterProjects();
        });
    });

    window.openModal = (id) => {
        const project = projects.find(p => p.id === id);
        if (project) {
            projectInfoContent.innerHTML = `
                <p><strong>ชื่อโครงงาน (TH):</strong> ${project.name_th}</p>
                <p><strong>ชื่อโครงงาน (EN):</strong> ${project.name_en}</p>
                <p><strong>ขอบเขตของโครงงาน:</strong> ${project.scope}</p>
                <p><strong>สถานะปัจจุบัน:</strong> <span class="py-1 px-3 rounded-full text-xs font-medium ${getStatusBadgeClass(getDisplayedStatus(project))}">${getDisplayedStatus(project)}</span></p>
            `;
            studentContent.innerHTML = project.students.map(student => `<p>${student}</p>`).join('');
            advisorContent.innerHTML = `
                <p><strong>อาจารย์ที่ปรึกษา:</strong> ${project.advisor}</p>
                <p><strong>อาจารย์ที่ปรึกษาร่วม:</strong> ${project.co_advisor || 'ไม่มี'}</p>
            `;
            
            // เพิ่มส่วนของความคิดเห็น
            if (project.comment) {
                commentSection.classList.remove('hidden');
                commentContent.innerHTML = `<p>${project.comment}</p>`;
            } else {
                commentSection.classList.add('hidden');
                commentContent.innerHTML = '';
            }

            projectModal.classList.remove('hidden');
        }
    };

    window.closeModal = (id) => {
        document.getElementById(id).classList.add('hidden');
    };

    const sidebar = document.getElementById('sidebar');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    sidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Initial render
    updateCounts();
    renderTable(projects);
});
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOpenBtn = document.getElementById('sidebar-open-btn');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
    }

    function closeSidebar() {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
    }

    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }

    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener('click', openSidebar);
    }
    
    // โค้ดสำหรับปิด sidebar เมื่อคลิกนอกพื้นที่
    window.addEventListener('click', function(event) {
        if (window.innerWidth < 1024) {
            if (!sidebar.contains(event.target) && !event.target.closest('#sidebar-open-btn')) {
                closeSidebar();
            }
        }
    });

    function handleResize() {
        if (window.innerWidth >= 1024) {
            sidebar.classList.remove('fixed', 'transform', '-translate-x-full');
            sidebar.classList.add('relative', 'translate-x-0');
        } else {
            sidebar.classList.remove('relative', 'translate-x-0');
            sidebar.classList.add('fixed', 'transform', '-translate-x-full');
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
});