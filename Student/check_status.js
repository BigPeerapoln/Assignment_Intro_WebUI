document.addEventListener('DOMContentLoaded', function () {
    function displayStatus(status, note) {
        const statusCard = document.getElementById('status-card');
        const notesSection = document.getElementById('notes-section');
        const guidelineSection = document.getElementById('guideline-section');
        const noteText = document.getElementById('note-text');
        let content = '';

        switch (status) {
            case 'pass':
                statusCard.className = 'text-center p-6 md:p-8 bg-green-100 text-green-700 border border-green-300 status-card';
                content = `
                    <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="text-2xl md:text-3xl font-bold">ผ่าน</h3>
                    <p class="mt-1 md:mt-2 text-base md:text-lg">หัวข้อโครงงานได้รับอนุมัติเรียบร้อยแล้ว</p>
                `;
                notesSection.classList.add('hidden');
                guidelineSection.classList.add('hidden');
                break;
            case 'fail':
                statusCard.className = 'text-center p-6 md:p-8 bg-red-100 text-red-700 border border-red-300 status-card';
                content = `
                    <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="text-2xl md:text-3xl font-bold">ไม่ผ่าน</h3>
                    <p class="mt-1 md:mt-2 text-base md:text-lg">หัวข้อโครงงานไม่ได้รับอนุมัติ</p>
                `;
                notesSection.classList.add('hidden');
                guidelineSection.classList.add('hidden');
                break;
            case 'edits':
                statusCard.className = 'text-center p-6 md:p-8 bg-yellow-100 text-yellow-700 border border-yellow-300 status-card';
                content = `
                    <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 002 0V6z" clip-rule="evenodd"></path>
                        <path fill-rule="evenodd" d="M10 12a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="text-2xl md:text-3xl font-bold">ผ่านแบบแก้ไข</h3>
                    <p class="mt-1 md:mt-2 text-base md:text-lg">กรุณาแก้ไขตามหมายเหตุ</p>
                `;
                notesSection.classList.remove('hidden');
                guidelineSection.classList.remove('hidden');
                noteText.textContent = note;
                break;
            default:
                statusCard.className = 'text-center p-6 md:p-8 bg-gray-100 text-gray-700 border border-gray-300 status-card';
                content = `
                    <svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                    <h3 class="text-2xl md:text-3xl font-bold">รอกรรมการตรวจสอบ</h3>
                    <p class="mt-1 md:mt-2 text-base md:text-lg">กรุณารอผลการตรวจสอบจากอาจารย์</p>
                `;
                notesSection.classList.add('hidden');
                guidelineSection.classList.add('hidden');
        }

        statusCard.innerHTML = content;
    }

    // ตัวอย่างการเรียกใช้
    displayStatus('edits', 'ปรับขอบเขตเเละวัตถุประสงค์ของหัวข้อโครงงาน ให้มีความชัดเจนมากขึ้น เเละทำการขึ้นสอบหัวใหม่');
});