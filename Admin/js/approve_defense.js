document.addEventListener('DOMContentLoaded', () => {

    // Updated Dummy data to include committee signature status
    const projects = [
        {
            id: 1,
            name_th: "ระบบจัดการงานเอกสารออนไลน์สำหรับองค์กร",
            name_en: "Online Document Management System for Organizations",
            major: "IT",
            students: ["นายธนบูลย์ อิ่มเจริญ (6806022510017)", "นายวัชโรทัย เลิศวิลัย (6806022510025)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: null,
            defense_status: "สอบผ่านโครงงาน",
            final_doc_status: "แนบเอกสารเล่มสมบูรณ์เสร็จสิ้น",
            approval_status: "pending",
            sec: 1,
            file_final_thesis_pdf: "https://example.com/final_thesis/project_1_final_thesis.pdf",
            file_final_thesis_word: "https://example.com/final_thesis/project_1_final_thesis.docx",
            submission_date: "15 กันยายน 2568",
            committee_signatures: {
                "ผศ.นพดล บูรณ์กุศล": { status: "signed", date: "2025-09-17 10:30" },
                "รศ.ดร.อนิราช มิ่งขวัญ": { status: "signed", date: "2025-09-17 11:45" },
                "อ.ดร.กาญจน ณ ศรีธะ": { status: "signed", date: "2025-09-17 13:00" },
                "อ.สุดา รักษ์ดี": { status: "signed", date: "2025-09-17 14:15" }
            },
            is_signed_by_all: true
        },
        {
            id: 2,
            name_th: "แอปพลิเคชันติดตามการออกกำลังกายบนมือถือ",
            name_en: "Mobile Fitness Tracking Application",
            major: "ITI",
            students: ["นายพลากร แพทย์นุเคราะห์ (6806022510092)"],
            advisor: "รศ.ดร.อนิราช มิ่งขวัญ",
            co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
            defense_status: "สอบผ่านโครงงาน",
            final_doc_status: "แนบเอกสารเล่มสมบูรณ์เสร็จสิ้น",
            approval_status: "pending",
            sec: 2,
            file_final_thesis_pdf: "https://example.com/final_thesis/project_2_final_thesis.pdf",
            file_final_thesis_word: "https://example.com/final_thesis/project_2_final_thesis.docx",
            submission_date: "15 กันยายน 2568",
            committee_signatures: {
                "รศ.ดร.อนิราช มิ่งขวัญ": { status: "signed", date: "2025-09-16 09:00" },
                "อ.ดร.กาญจน ณ ศรีธะ": { status: "pending", date: null },
                "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ": { status: "pending", date: null },
                "ผศ.นิมิต ศรีคำทา": { status: "pending", date: null }
            },
            is_signed_by_all: false
        },
        {
            id: 3,
            name_th: "เว็บไซต์ขายสินค้าอิเล็กทรอนิกส์",
            name_en: "E-commerce Website for Electronics",
            major: "IT",
            students: ["นายขรรค์ชัย ลิ้มประเสริฐ (6806022510033)"],
            advisor: "ผศ.ดร.ขนิษฐา นามี",
            co_advisor: null,
            defense_status: "สอบผ่านโครงงาน",
            final_doc_status: "แนบเอกสารเล่มสมบูรณ์เสร็จสิ้น",
            approval_status: "approved",
            sec: 1,
            file_final_thesis_pdf: "https://example.com/final_thesis/project_3_final_thesis.pdf",
            file_final_thesis_word: "https://example.com/final_thesis/project_3_final_thesis.docx",
            submission_date: "10 กันยายน 2568",
            committee_signatures: {
                "ผศ.ดร.ขนิษฐา นามี": { status: "signed", date: "2025-09-12 11:00" },
                "ผศ.นพดล บูรณ์กุศล": { status: "signed", date: "2025-09-12 11:30" },
                "อ.สุดา รักษ์ดี": { status: "signed", date: "2025-09-12 12:00" },
                "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ": { status: "signed", date: "2025-09-12 12:30" }
            },
            is_signed_by_all: true
        },
        {
            id: 4,
            name_th: "ระบบควบคุมอุณหภูมิในโรงเรือนอัจฉริยะ",
            name_en: "Smart Greenhouse Temperature Control System",
            major: "ITI",
            students: ["นางสาวกนกวรรณ ศรีประไชย (6806022510041)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: "อ.ดร.กาญจน ณ ศรีธะ",
            defense_status: "สอบผ่านโครงงาน",
            final_doc_status: "แนบเอกสารเล่มสมบูรณ์เสร็จสิ้น",
            approval_status: "pending",
            sec: 2,
            file_final_thesis_pdf: "https://example.com/final_thesis/project_4_final_thesis.pdf",
            file_final_thesis_word: "https://example.com/final_thesis/project_4_final_thesis.docx",
            submission_date: "14 กันยายน 2568",
            committee_signatures: {
                "ผศ.นพดล บูรณ์กุศล": { status: "signed", date: "2025-09-16 14:00" },
                "อ.ดร.กาญจน ณ ศรีธะ": { status: "pending", date: null },
                "ผศ.นิมิต ศรีคำทา": { status: "pending", date: null },
                "อ.สุดา รักษ์ดี": { status: "pending", date: null }
            },
            is_signed_by_all: false
        },
        {
            id: 5,
            name_th: "การวิเคราะห์ข้อมูลเครือข่ายสังคม",
            name_en: "Social Network Data Analysis",
            major: "INET",
            students: ["นายก้องกาย วงษ์มอญ (6806022510319)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: null,
            defense_status: "สอบผ่านโครงงาน",
            final_doc_status: "แนบเอกสารเล่มสมบูรณ์เสร็จสิ้น",
            approval_status: "pending",
            sec: 3,
            file_final_thesis_pdf: "https://example.com/final_thesis/project_5_final_thesis.pdf",
            file_final_thesis_word: "https://example.com/final_thesis/project_5_final_thesis.docx",
            submission_date: "16 กันยายน 2568",
            committee_signatures: {
                "ผศ.นพดล บูรณ์กุศล": { status: "signed", date: "2025-09-16 15:30" },
                "รศ.ดร.อนิราช มิ่งขวัญ": { status: "signed", date: "2025-09-16 16:00" },
                "ผศ.ดร.ขนิษฐา นามี": { status: "signed", date: "2025-09-16 16:15" },
                "ผศ.นิมิต ศรีคำทา": { status: "signed", date: "2025-09-16 16:30" }
            },
            is_signed_by_all: true
        },
        {
            id: 6,
            name_th: "แอนิเมชันสำหรับสื่อโฆษณา",
            name_en: "Animation for Advertising Media",
            major: "INE",
            students: ["นายนันทวัฒน์ นันทวิสาร (6806022510050)"],
            advisor: "ผศ.นพดล บูรณ์กุศล",
            co_advisor: null,
            defense_status: "สอบผ่านโครงงาน",
            final_doc_status: "แนบเอกสารเล่มสมบูรณ์เสร็จสิ้น",
            approval_status: "pending",
            sec: 4,
            file_final_thesis_pdf: "https://example.com/final_thesis/project_6_final_thesis.pdf",
            file_final_thesis_word: "https://example.com/final_thesis/project_6_final_thesis.docx",
            submission_date: "17 กันยายน 2568",
            committee_signatures: {
                "ผศ.นพดล บูรณ์กุศล": { status: "pending", date: null },
                "รศ.ดร.อนิราช มิ่งขวัญ": { status: "pending", date: null },
                "อ.ดร.กาญจน ณ ศรีธะ": { status: "pending", date: null },
                "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ": { status: "pending", date: null }
            },
            is_signed_by_all: false
        },
    ];

    const projectList = document.getElementById('project-list');
    const documentModal = document.getElementById('documentModal');
    const finalApprovalAlert = document.getElementById('finalApprovalAlert');
    const approvedCount = document.getElementById('approvedCount');
    const pendingCount = document.getElementById('pendingCount');
    const modalProjectInfo = document.getElementById('modalProjectInfo');
    const modalSignatureStatus = document.getElementById('modalSignatureStatus'); // Get the new element
    const approveButton = document.getElementById('approveButton');
    const secFilter = document.getElementById('secFilter');

    // File elements in modal
    const pdfFileName = document.getElementById('pdfFileName');
    const pdfPreviewBtn = document.getElementById('pdfPreviewBtn');
    const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');
    const pdfDate = document.getElementById('pdfDate');

    const wordFileName = document.getElementById('wordFileName');
    const wordPreviewBtn = document.getElementById('wordPreviewBtn');
    const wordDownloadBtn = document.getElementById('wordDownloadBtn');
    const wordDate = document.getElementById('wordDate');


    let currentMajor = 'all';
    let currentSearchQuery = '';
    let currentSec = 'all';

    const updateSummaryCards = () => {
        const approved = projects.filter(p => p.approval_status === 'approved').length;
        const pending = projects.filter(p => p.approval_status === 'pending').length;
        approvedCount.textContent = `${approved} โครงงาน`;
        pendingCount.textContent = `${pending} โครงงาน`;
    };

    const renderProjects = () => {
        let filteredProjects = projects.filter(project => {
            const majorMatch = currentMajor === 'all' || project.major === currentMajor;
            const searchMatch = project.name_th.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                project.name_en.toLowerCase().includes(currentSearchQuery.toLowerCase());
            const secMatch = currentSec === 'all' || project.sec.toString() === currentSec;

            return project.defense_status === 'สอบผ่านโครงงาน' && majorMatch && searchMatch && secMatch;
        });

        projectList.innerHTML = '';

        if (filteredProjects.length === 0) {
            projectList.innerHTML = `<p class="col-span-full text-center text-gray-500">ไม่พบโครงงานที่ผ่านการสอบจบและพร้อมอนุมัติ</p>`;
            return;
        }

        filteredProjects.forEach(project => {
            let statusText, button;

            // Logic to determine status text and button state
            if (project.approval_status === 'approved') {
                statusText = `<span class="text-green-600 font-semibold">อนุมัติจบโครงงานแล้ว</span>`;
                button = `<button class="bg-gray-400 text-white text-sm px-4 py-2 rounded-md cursor-not-allowed" disabled>อนุมัติแล้ว</button>`;
            } else if (project.is_signed_by_all) {
                statusText = `<span class="text-green-600 font-semibold">คณะกรรมการลงนามครบถ้วน เสร็จสิ้น</span>`;
                button = `<button class="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition" onclick="showDocumentModal(${project.id});">ตรวจเอกสารและอนุมัติลงนาม</button>`;
            } else {
                statusText = `<span class="text-red-600 font-semibold">รอคณะกรรมการลงนาม</span>`;
                button = `<button class="bg-gray-400 text-white text-sm px-4 py-2 rounded-md cursor-not-allowed" disabled>รอการลงนามจากกรรมการ</button>`;
            }

            const card = document.createElement('div');
            card.className = "card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between";

            card.innerHTML = `
                <div>
                    <h3 class="text-lg font-bold text-gray-800 mb-1">${project.name_th}</h3>
                    <p class="text-sm text-gray-500">${project.name_en}</p>
                    <div class="mt-4">
                        <p class="font-semibold text-gray-800">สถานะ: ${statusText}</p>
                    </div>
                </div>
                <div class="flex space-x-2 mt-4">
                    ${button}
                </div>
            `;
            projectList.appendChild(card);
        });
    };

    const showDocumentModal = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        // Populate Project Info
        modalProjectInfo.innerHTML = `
            <p><span class="font-semibold">ชื่อโครงงาน (TH):</span> ${project.name_th}</p>
            <p><span class="font-semibold">ชื่อโครงงาน (EN):</span> ${project.name_en}</p>
            <p><span class="font-semibold">ผู้จัดทำ:</span> ${project.students.join(', ')}</p>
            <p><span class="font-semibold">อาจารย์ที่ปรึกษา:</span> ${project.advisor}</p>
            <p><span class="font-semibold">อาจารย์ที่ปรึกษาร่วม:</span> ${project.co_advisor || 'ไม่มี'}</p>
        `;

        // Populate Signature Status
        let signatureHtml = `<div class="space-y-2 text-sm text-gray-700">`;
        for (const [name, data] of Object.entries(project.committee_signatures)) {
            const statusColor = data.status === 'signed' ? 'text-green-600' : 'text-red-600';
            const statusText = data.status === 'signed' ? `ลงนามสำเร็จ` : `รอการลงนาม`;
            const dateText = data.date ? `เมื่อวันที่: ${data.date}` : '';
            signatureHtml += `
                <div class="flex justify-between items-center py-1">
                    <span class="font-medium flex-1">${name}</span>
                    <span class="${statusColor} font-semibold flex-1 text-right">${statusText}</span>
                    <span class="text-xs text-gray-500 flex-1 text-right hidden sm:block">${dateText}</span>
                </div>
            `;
        }
        signatureHtml += `</div>`;
        modalSignatureStatus.innerHTML = signatureHtml;


        // Enable/disable the approve button based on signature status
        approveButton.disabled = !project.is_signed_by_all;
        approveButton.className = `w-full px-6 py-3 rounded-lg font-semibold transition ${project.is_signed_by_all ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`;

        // Update file info
        pdfFileName.textContent = `Final_Project_Report_${project.major.toUpperCase()}.pdf`;
        pdfPreviewBtn.href = project.file_final_thesis_pdf;
        pdfDownloadBtn.href = project.file_final_thesis_pdf;
        pdfDate.textContent = `แนบเมื่อวันที่: ${project.submission_date}`;

        wordFileName.textContent = `Final_Project_Report_${project.major.toUpperCase()}.docx`;
        wordPreviewBtn.href = project.file_final_thesis_word;
        wordDownloadBtn.href = project.file_final_thesis_word;
        wordDate.textContent = `แนบเมื่อวันที่: ${project.submission_date}`;

        // Add event listener for the approve button
        if (project.is_signed_by_all) {
            approveButton.onclick = () => approveProject(projectId);
        } else {
            approveButton.onclick = null;
        }

        documentModal.classList.remove('hidden');
    };

    const approveProject = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (project && project.is_signed_by_all) {
            project.approval_status = 'approved';
            closeModal('documentModal');
            showFinalApprovalAlert();
        }
    };

    const showFinalApprovalAlert = () => {
        finalApprovalAlert.classList.remove('hidden');
    };

    const hideFinalApprovalAlert = () => {
        finalApprovalAlert.classList.add('hidden');
        renderProjects();
        updateSummaryCards();
    };

    const closeModal = (modalId) => {
        document.getElementById(modalId).classList.add('hidden');
    };

    // Event listeners for filters
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentMajor = e.target.dataset.tab;
            renderProjects();
        });
    });

    secFilter.addEventListener('change', (e) => {
        currentSec = e.target.value;
        renderProjects();
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

    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const sidebar = document.getElementById('sidebar');

    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    sidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Global access
    window.showDocumentModal = showDocumentModal;
    window.hideFinalApprovalAlert = hideFinalApprovalAlert;
    window.closeModal = closeModal;

    // Initial render
    updateSummaryCards();
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