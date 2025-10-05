document.addEventListener('DOMContentLoaded', () => {

    // Dummy data
    const projects = [
        // IT - 5 projects
        {
            id: 1,
            name_th: "ระบบจัดการงานเอกสารออนไลน์สำหรับองค์กร",
            name_en: "Online Document Management System for Organizations",
            major: "IT",
            students: ["นายธนบูลย์ อิ่มเจริญ (6806022510017)", "นายวัชโรทัย เลิศวิลัย (6806022510025)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: null,
            progress: 100,
            file_thesis: "https://example.com/thesis/project_1_thesis.pdf",
            file_presentation: "https://example.com/presentation/project_1_presentation.pptx",
            status: "scheduled",
            topic_committee: ["ผศ.นพดล บูรณ์กุศล", "รศ.ดร.อนิราช มิ่งขวัญ", "ผศ.ดร.ขนิษฐา นามี", "ผศ.จสต.นพเก้า ทองใบ"]
        },
        {
            id: 2,
            name_th: "แอปพลิเคชันติดตามการออกกำลังกายบนมือถือ",
            name_en: "Mobile Fitness Tracking Application",
            major: "IT",
            students: ["นายพลากร แพทย์นุเคราะห์ (6806022510092)"],
            advisor: "รศ.ดร.อนิราช มิ่งขวัญ",
            co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
            progress: 100,
            file_thesis: "https://example.com/thesis/project_2_thesis.pdf",
            file_presentation: "https://example.com/presentation/project_2_presentation.pptx",
            status: "ready_for_defense",
            topic_committee: ["รศ.ดร.อนิราช มิ่งขวัญ", "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ", "ผศ.นิมิต ศรีคำทา", "ผศ.อรบุษป์ วุฒิกมลชัย"]
        },
        {
            id: 3,
            name_th: "เว็บไซต์ขายสินค้าอิเล็กทรอนิกส์",
            name_en: "E-commerce Website for Electronics",
            major: "IT",
            students: ["นายขรรค์ชัย ลิ้มประเสริฐ (6806022510033)"],
            advisor: "ผศ.ดร.ขนิษฐา นามี",
            co_advisor: null,
            progress: 95,
            status: "in_progress",
            topic_committee: ["ผศ.ดร.ขนิษฐา นามี", "ผศ.นพดล บูรณ์กุศล", "อ.ดร.พิทย์พิมล ชูรอด"]
        },
        {
            id: 4,
            name_th: "ระบบควบคุมอุณหภูมิในโรงเรือนอัจฉริยะ",
            name_en: "Smart Greenhouse Temperature Control System",
            major: "ITI",
            students: ["นางสาวสุกัญญา มาพระยืน (6806022510211)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
            progress: 100,
            file_thesis: "https://example.com/thesis/project_4_thesis.pdf",
            file_presentation: "https://example.com/presentation/project_4_presentation.pptx",
            status: "scheduled",
            topic_committee: ["ผศ.นพดล บูรณ์กุศล", "อ.ดร.กาญจน ณ ศรีธะ", "ผศ.นิมิต ศรีคำทา", "ผศ.สิวาลัย จินเจือ"]
        },
        {
            id: 5,
            name_th: "การวิเคราะห์ข้อมูลเครือข่ายสังคม",
            name_en: "Social Network Data Analysis",
            major: "INE",
            students: ["นายกณวรรธน์ เดชแสง (6806022510076)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: null,
            progress: 100,
            file_thesis: "https://example.com/thesis/project_5_thesis.pdf",
            file_presentation: "https://example.com/presentation/project_5_presentation.pptx",
            status: "ready_for_defense",
            topic_committee: ["ผศ.นพดล บูรณ์กุศล", "รศ.ดร.อนิราช มิ่งขวัญ", "ผศ.พีระศักดิ์ เสรีกุล", "ผศ.ดร.สุปีติ กุลจันทร์"]
        },
        {
            id: 6,
            name_th: "แอนิเมชันสำหรับสื่อโฆษณา",
            name_en: "Animation for Advertising Media",
            major: "INET",
            students: ["นายนันทวัฒน์ นันทวิสาร (6806022510050)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: null,
            progress: 100,
            file_thesis: "https://example.com/thesis/project_6_thesis.pdf",
            file_presentation: "https://example.com/presentation/project_6_presentation.pptx",
            status: "ready_for_defense",
            topic_committee: ["ผศ.นพดล บูรณ์กุศล", "ผศ.ดร.ขนิษฐา นามี", "รศ.ดร.อนิราช มิ่งขวัญ", "ผศ.ดร.บีสุดา ดาวเรือง"]
        },
        {
            id: 7,
            name_th: "ระบบบริหารจัดการคลังสินค้าอัจฉริยะ",
            name_en: "Smart Warehouse Management System",
            major: "ITI",
            students: ["นายก้องกาย วงษ์มอญ (6806022510319)"],
            advisor: "รศ.ดร.อนิราช มิ่งขวัญ",
            co_advisor: null,
            progress: 100,
            file_thesis: "https://example.com/thesis/project_7_thesis.pdf",
            file_presentation: "https://example.com/presentation/project_7_presentation.pptx",
            status: "ready_for_defense",
            topic_committee: ["รศ.ดร.อนิราช มิ่งขวัญ", "ผศ.นพดล บูรณ์กุศล", "อ.ดร.ประดิษฐ์ พิทักษ์เสถียรกุล", "ผศ.ดร.พาฝัน ดวงไพศาล"]
        },
        {
            id: 8,
            name_th: "การออกแบบตัวละครเกม 3 มิติ",
            name_en: "3D Game Character Design",
            major: "INET",
            students: ["นายกัณติกรณ์ สรสุริยวงษ์ (6806022510068)"],
            advisor: "ผศ.ดร.ขนิษฐา นามี",
            co_advisor: null,
            progress: 100,
            file_thesis: "https://example.com/thesis/project_8_thesis.pdf",
            file_presentation: "https://example.com/presentation/project_8_presentation.pptx",
            status: "scheduled",
            topic_committee: ["ผศ.ดร.ขนิษฐา นามี", "รศ.ดร.อนิราช มิ่งขวัญ", "ผศ.นิมิต ศรีคำทา", "ผศ.ดร.พาฝัน ดวงไพศาล"]
        },
    ];

    // Dummy data for all teachers
    const allTeachers = [
        "ผศ. ดร. วิมลวรรณ ชัยรุ่งเรือง", "รศ. ดร. ชัยวัฒน์ เกียรติศักดิ์", "ดร. อภิสิทธิ์ วงศ์ตระกูล",
        "ดร. อรุณี แสงดาว", "ผศ. สมศรี รักชาติ", "ดร. กิตติชัย วงศ์สุวรรณ", "รศ. ดร. สมบัติ วัฒนากร",
        "อาจารย์ ก.ไก่", "อาจารย์ ข.ไข่"
    ];

    const projectList = document.getElementById('project-list');
    const defenseModal = document.getElementById('defenseModal');
    const appointmentModal = document.getElementById('appointmentModal');
    const projectDetailsContent = document.getElementById('projectDetailsContent');
    const fileLinksContent = document.getElementById('fileLinksContent');

    const appointmentProjectDetails = document.getElementById('appointmentProjectDetails');
    const currentCommitteeDisplay = document.getElementById('currentCommittee');
    const editCommitteeBtn = document.getElementById('editCommitteeBtn');
    const committeeEditSection = document.getElementById('committee-edit-section');
    const finishEditBtn = document.getElementById('finishEditBtn');

    const committeePresidentSelect = document.getElementById('committee_president');
    const committee1Select = document.getElementById('committee_1');
    const committee2Select = document.getElementById('committee_2');
    const committee3Select = document.getElementById('committee_3');
    const appointmentForm = document.getElementById('appointmentForm');

    let currentMajor = 'all';
    let currentSearchQuery = '';
    let currentProjectId = null;
    let newCommittee = [];

    const renderProjects = () => {
        let filteredProjects = projects.filter(project => {
            const majorMatch = currentMajor === 'all' || project.major === currentMajor;
            const searchMatch = project.name_th.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                project.name_en.toLowerCase().includes(currentSearchQuery.toLowerCase());
            return project.progress === 100 && project.status !== 'scheduled' && majorMatch && searchMatch;
        });

        projectList.innerHTML = '';

        if (filteredProjects.length === 0) {
            projectList.innerHTML = `<p class="col-span-full text-center text-gray-500">ไม่พบโครงงานที่พร้อมขึ้นสอบจบ</p>`;
            return;
        }

        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = "card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300";

            card.innerHTML = `
                <div class="mb-4">
                    <h3 class="text-lg font-bold text-gray-800 mb-1">${project.name_th}</h3>
                    <p class="text-sm text-gray-500">${project.name_en}</p>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-sm font-semibold text-green-700">คืบหน้า 100% (พร้อมขึ้นสอบจบ)</span>
                    <div class="w-1/3 bg-gray-200 rounded-full h-2.5">
                        <div class="bg-green-500 h-2.5 rounded-full" style="width: 100%"></div>
                    </div>
                </div>
                <div class="flex space-x-2 mt-4">
                    <button class="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition" onclick="showDefenseDetails(${project.id});">รายละเอียด</button>
                    <button class="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition" onclick="showAppointmentModal(${project.id});">นัดหมายการสอบจบ</button>
                </div>
            `;
            projectList.appendChild(card);
        });
    };

    const showDefenseDetails = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        projectDetailsContent.innerHTML = `
            <p><span class="font-semibold">ชื่อโครงงาน (TH):</span> ${project.name_th}</p>
            <p><span class="font-semibold">ชื่อโครงงาน (EN):</span> ${project.name_en}</p>
            <p><span class="font-semibold">ผู้จัดทำโครงงาน:</span></p>
            <ul class="list-disc list-inside ml-4">
                ${project.students.map(s => `<li>${s}</li>`).join('')}
            </ul>
            <p><span class="font-semibold">อาจารย์ที่ปรึกษา:</span> ${project.advisor}</p>
            <p><span class="font-semibold">อาจารย์ที่ปรึกษาร่วม:</span> ${project.co_advisor || 'ไม่มี'}</p>
        `;

        fileLinksContent.innerHTML = `
            <div>
                <p class="font-semibold">รูปเล่มโครงงาน:</p>
                <div class="flex items-center space-x-2 mt-1">
                    <a href="${project.file_thesis}" target="_blank" class="text-blue-600 hover:underline">คลิกเพื่อดูไฟล์</a>
                    <a href="${project.file_thesis}" download class="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-600 transition">ดาวน์โหลด</a>
                </div>
            </div>
            <div class="mt-4">
                <p class="font-semibold">ไฟล์ Presentation:</p>
                <div class="flex items-center space-x-2 mt-1">
                    <a href="${project.file_presentation}" target="_blank" class="text-blue-600 hover:underline">คลิกเพื่อดูไฟล์</a>
                    <a href="${project.file_presentation}" download class="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-600 transition">ดาวน์โหลด</a>
                </div>
            </div>
        `;

        defenseModal.classList.remove('hidden');
    };

    const showAppointmentModal = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;
        currentProjectId = projectId;

        // Reset state
        committeeEditSection.classList.add('hidden');
        newCommittee = [];

        // Show project info
        appointmentProjectDetails.innerHTML = `<p><span class="font-semibold">ชื่อโครงงาน:</span> ${project.name_th}</p>`;

        // Show original committee
        updateCommitteeDisplay(project.topic_committee);

        // Populate DDLs with all teachers
        const selects = [committeePresidentSelect, committee1Select, committee2Select, committee3Select];
        selects.forEach(select => {
            select.innerHTML = '';
            allTeachers.forEach(teacher => {
                const option = document.createElement('option');
                option.value = teacher;
                option.textContent = teacher;
                select.appendChild(option);
            });
        });

        // Reset form
        appointmentForm.reset();

        appointmentModal.classList.remove('hidden');
    };

    const updateCommitteeDisplay = (committeeList) => {
        const listItems = committeeList.map((member, index) => {
            let role = '';
            if (index === 0) role = 'ประธาน';
            else if (index === 1) role = 'กรรมการ 1';
            else if (index === 2) role = 'กรรมการ 2';
            else if (index === 3) role = 'กรรมการ 3';
            return `<li class="font-medium">${member} ${role ? `(${role})` : ''}</li>`;
        }).join('');
        currentCommitteeDisplay.innerHTML = `<ul class="list-disc list-inside ml-4">${listItems}</ul>`;
    };

    const closeModal = (modalId) => {
        document.getElementById(modalId).classList.add('hidden');
    };

    // Event listener for "Edit Committee" button
    editCommitteeBtn.addEventListener('click', () => {
        committeeEditSection.classList.remove('hidden');
    });

    // Event listener for "Finish Edit" button
    finishEditBtn.addEventListener('click', () => {
        newCommittee = [
            committeePresidentSelect.value,
            committee1Select.value,
            committee2Select.value,
            committee3Select.value
        ].filter(Boolean); // Remove empty strings

        updateCommitteeDisplay(newCommittee);
        committeeEditSection.classList.add('hidden');
    });

    // Event listener for form submission
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = document.getElementById('defense_date').value;
        const time = document.getElementById('defense_time').value;
        const room = document.getElementById('defense_room').value;
        const additionalNotes = document.getElementById('additional_notes').value;

        if (date && time && room) {
            let message = `ยืนยันการนัดหมายสอบ: วันที่ ${date}, เวลา ${time}, ห้อง ${room}\n`;
            if (newCommittee.length > 0) {
                message += `คณะกรรมการใหม่: ${newCommittee.join(', ')}\n`;
            }
            if (additionalNotes) {
                message += `รายละเอียดเพิ่มเติม: ${additionalNotes}`;
            }
            alert(message);
            closeModal('appointmentModal');
            // Here you would send the data to the server
        } else {
            alert('กรุณากรอกข้อมูล วันที่, เวลา, และห้องสอบ ให้ครบถ้วน');
        }
    });

    // Event listeners for filters
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentMajor = e.target.dataset.tab;
            renderProjects();
        });
    });

    document.getElementById('searchButton').addEventListener('click', () => {
        currentSearchQuery = document.getElementById('searchProject').value;
        renderProjects();
    });

    document.getElementById('searchProject').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearchQuery = e.target.value;
            renderProjects();
        }
    });

    // --- Sidebar functionality (Corrected and Consolidated) ---
    const sidebar = document.getElementById('sidebar');
    const sidebarOpenBtn = document.getElementById('sidebar-open-btn');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    // Function to open the sidebar
    const openSidebar = () => {
        sidebar.classList.remove('-left-full');
        sidebar.classList.add('left-0');
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        sidebar.classList.remove('left-0');
        sidebar.classList.add('-left-full');
    };

    // Add a click event to the open button
    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener('click', openSidebar);
    }
    
    // Add a click event to the close button
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }
    
    // Close the sidebar when clicking outside of it on mobile
    window.addEventListener('click', (event) => {
        if (window.innerWidth < 1024) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnToggle = event.target.closest('#sidebar-open-btn');
            
            if (!isClickInsideSidebar && !isClickOnToggle) {
                closeSidebar();
            }
        }
    });

    // Handle responsive behavior on resize
    function handleResize() {
        if (window.innerWidth >= 1024) { 
            sidebar.classList.remove('fixed', '-left-full', 'left-0');
            sidebar.classList.add('relative');
        } else {
            sidebar.classList.remove('relative');
            sidebar.classList.add('fixed', '-left-full');
            if (sidebar.classList.contains('left-0')) {
                sidebar.classList.remove('-left-full');
            }
        }
    }

    // Run on page load and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Global access
    window.showDefenseDetails = showDefenseDetails;
    window.showAppointmentModal = showAppointmentModal;
    window.closeModal = closeModal;

    // Initial render
    renderProjects();
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