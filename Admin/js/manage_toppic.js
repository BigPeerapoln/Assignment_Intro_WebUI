

const teachers = [
    "ดร.วรพล ทองดี",
    "อ.สุดา รักษ์ดี",
    "อ.นภัสวรรณ วิชาการ",
    "ดร.อภิชาติ พัฒนาสุข",
    "ดร.กนกพร มีชัย",
    "อ.สมคิด มีสุข",
    "ดร.วิชัย ประสิทธิ์",
    "อ.นิรันดร์ ใจเย็น",
    "รศ.ดร.อนิราช มิ่งขวัญ",
    "ผศ.อรบุษป์ วุฒิกมลชัย",
    "ผศ.ดร.บีสุดา ดาวเรือง",
    "ผศ.ดร.ขนิษฐา นามี",
    "อ.ดร.กาญจน ณ ศรีธะ",
    "ผศ.นพดล บูรณ์กุศล",
    "ผศ.จสต.นพเก้า ทองใบ",
    "ผศ.ดร.นิติการ นาคเจือทอง",
    "ผศ.ดร.นัฎฐพันธ์ นาคพงษ์",
    "ผศ.นิมิต ศรีคำทา",
    "อ.ดร.พิทย์พิมล ชูรอด",
    "ผศ.ดร.พาฝัน ดวงไพศาล",
    "อ.ดร.ประดิษฐ์ พิทักษ์เสถียรกุล",
    "ผศ.พีระศักดิ์ เสรีกุล",
    "ผศ.สมชัย เชียงพงศ์พันธุ์",
    "ผศ.ดร.สุปีติ กุลจันทร์",
    "ผศ.สิวาลัย จินเจือ",
    "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
    "ผศ.ดร.ศรายุทธ ธเนศสกุลวัฒนา",
    "อ.ดร.ศิรินทรา แว่วศรี",
    "อ.ดร.วัชรชัย คงศิริวัฒนา",
    "ผศ.ดร.วันทนี ประจวบศุภกิจ",
    "รศ.ดร.ยุพิน สรรพคุณ"
];

// const projects = {
//     IT: [
//         { name_th: "ระบบติดตามการซ่อมบำรุงในโรงพยาบาล", name_en: "Hospital Maintenance Tracking System", scope: "ระบบจัดการงานซ่อมบำรุงในโรงพยาบาล", students: [{ name: "กัญญา สุขใจ", id: "6234567890" }, { name: "สมชาย ใจดี", id: "6234567891" }], major: "IT", year: "3", sec: "A", advisor: "ดร.วรพล ทองดี", coadvisor: "อ.สุดา รักษ์ดี", file: "proposal_hospital.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "ระบบบริหารจัดการการเช่าห้องพักสำหรับนักศึกษา", name_en: "Student Dormitory Rental Management", scope: "จัดการข้อมูลห้องพักและผู้เช่า", students: [{ name: "ปาณัสม์ ชัยชนะ", id: "6234567892" }, { name: "จิรพัฒน์ สมบูรณ์", id: "6234567893" }], major: "IT", year: "3", sec: "B", advisor: "อ.นภัสวรรณ วิชาการ", coadvisor: "", file: "proposal_dorm.pdf", status: "รอการอนุมัติ" },
//         { name_th: "ระบบจัดการข้อมูลโครงงานพิเศษสำหรับนักศึกษา", name_en: "Special Project Management System", scope: "ติดตามความคืบหน้าของโครงงาน", students: [{ name: "วิภาวี มงคลชัย", id: "6234567894" }, { name: "สิทธิโชค ศรีวิชัย", id: "6234567895" }], major: "IT", year: "4", sec: "A", advisor: "ดร.อภิชาติ พัฒนาสุข", coadvisor: "ดร.กนกพร มีชัย", file: "proposal_special.pdf", status: "รอการอนุมัติ" },
//         { name_th: "แอปพลิเคชันจัดการการเรียนรู้สำหรับนักเรียนประถมศึกษา", name_en: "Primary School Learning App", scope: "ออกแบบแอปเพื่อเสริมทักษะการเรียนรู้", students: [{ name: "ณัฐวุฒิ ทองคำ", id: "6234567896" }, { name: "รุ่งนภา แจ่มใส", id: "6234567897" }], major: "IT", year: "3", sec: "C", advisor: "อ.สมคิด มีสุข", coadvisor: "", file: "proposal_learning.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "ระบบการจัดการฐานข้อมูลเชิงสัมพันธ์", name_en: "Relational Database Management System", scope: "ออกแบบและพัฒนาระบบฐานข้อมูล", students: [{ name: "อนันต์ เจริญ", id: "6234567898" }, { name: "พรทิพย์ อุดม", id: "6234567899" }], major: "IT", year: "4", sec: "A", advisor: "ดร.วรพล ทองดี", coadvisor: "", file: "proposal_db.pdf", status: "อนุมัติการสอบเสร็จสิ้น" }
//     ],
//     ITI: [
//         { name_th: "ระบบวิเคราะห์ข้อมูลยอดขายสินค้าออนไลน์", name_en: "Online Sales Data Analytics System", scope: "วิเคราะห์ข้อมูลเพื่อเพิ่มยอดขาย", students: [{ name: "พงษ์พัฒน์ จิตต์ดี", id: "6245678901" }, { name: "นภัสสร อ่อนหวาน", id: "6245678902" }], major: "ITI", year: "4", sec: "B", advisor: "อ.สุดา รักษ์ดี", coadvisor: "", file: "proposal_analytics.pdf", status: "รอการอนุมัติ" },
//         { name_th: "แอปพลิเคชันสำหรับจัดการการลงทุน", name_en: "Investment Management App", scope: "ช่วยวางแผนและติดตามการลงทุน", students: [{ name: "ชนม์สิทธิ์ พึ่งพา", id: "6245678903" }, { name: "พรรณรายณ์ มีชัย", id: "6245678904" }], major: "ITI", year: "4", sec: "A", advisor: "ดร.อภิชาติ พัฒนาสุข", coadvisor: "อ.สมคิด มีสุข", file: "proposal_investment.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "ระบบรายงานผลการเรียนแบบอัตโนมัติ", name_en: "Automated Grade Reporting System", scope: "สร้างระบบรายงานผลการเรียน", students: [{ name: "เมธาพร วัฒนะ", id: "6245678905" }, { name: "นภัทร รุ่งเรือง", id: "6245678906" }], major: "ITI", year: "3", sec: "C", advisor: "ดร.กนกพร มีชัย", coadvisor: "", file: "proposal_report.pdf", status: "รอการอนุมัติ" },
//         { name_th: "ระบบจองห้องประชุมออนไลน์", name_en: "Online Meeting Room Booking System", scope: "จัดการการจองห้องประชุม", students: [{ name: "นิรันดร์ มีสุข", id: "6245678907" }, { name: "จุฑามาศ โชคดี", id: "6245678908" }], major: "ITI", year: "4", sec: "B", advisor: "อ.สมคิด มีสุข", coadvisor: "", file: "proposal_booking.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "เว็บไซต์สำหรับการจัดการกิจกรรมและข่าวสารในภาควิชา", name_en: "Department Event & News Website", scope: "ออกแบบเว็บไซต์เพื่อประชาสัมพันธ์", students: [{ name: "อารีย์ อิ่มเอม", id: "6245678909" }, { name: "ธนวัฒน์ ดีใจ", id: "6245678910" }], major: "ITI", year: "3", sec: "A", advisor: "ดร.วรพล ทองดี", coadvisor: "อ.นภัสวรรณ วิชาการ", file: "proposal_website.pdf", status: "อนุมัติการสอบเสร็จสิ้น" }
//     ],
//     INE: [
//         { name_th: "แพลตฟอร์มจัดการตารางเรียนและกิจกรรมสำหรับนักศึกษา", name_en: "Student Scheduling & Activity Platform", scope: "ช่วยนักศึกษาวางแผนการเรียนและกิจกรรม", students: [{ name: "พรทิพย์ อนันต์", id: "6256789012" }, { name: "ปิติ พรหม", id: "6256789013" }], major: "INE", year: "3", sec: "B", advisor: "อ.สมคิด มีสุข", coadvisor: "", file: "proposal_platform.pdf", status: "รอการอนุมัติ" },
//         { name_th: "ระบบควบคุมไฟจราจรด้วย AI", name_en: "AI-powered Traffic Light Control System", scope: "ใช้ AI ควบคุมการจราจร", students: [{ name: "เอกลักษณ์ ดีเลิศ", id: "6256789014" }, { name: "เพ็ญนภา รุ่งเรือง", id: "6256789015" }], major: "INE", year: "4", sec: "A", advisor: "ดร.อภิชาติ พัฒนาสุข", coadvisor: "อ.สุดา รักษ์ดี", file: "proposal_traffic.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "ระบบควบคุมการทำงานของหุ่นยนต์", name_en: "Robot Operation Control System", scope: "ควบคุมการเคลื่อนที่และการทำงานของหุ่นยนต์", students: [{ name: "มานพ โชคดี", id: "6256789016" }, { name: "ทัศนีย์ อิ่มเอม", id: "6256789017" }], major: "INE", year: "4", sec: "C", advisor: "ดร.วรพล ทองดี", coadvisor: "", file: "proposal_robot.pdf", status: "รอการอนุมัติ" },
//         { name_th: "ระบบวัดคุณภาพอากาศแบบเรียลไทม์", name_en: "Real-time Air Quality Monitoring System", scope: "ใช้เซ็นเซอร์วัดคุณภาพอากาศ", students: [{ name: "ชลิตา วรรณดี", id: "6256789018" }, { name: "ธีรพล มีชัย", id: "6256789019" }], major: "INE", year: "3", sec: "A", advisor: "อ.นภัสวรรณ วิชาการ", coadvisor: "", file: "proposal_air.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "การประยุกต์ใช้ Blockchain ในการจัดการข้อมูล", name_en: "Blockchain for Data Management", scope: "สร้างระบบจัดการข้อมูลด้วยเทคโนโลยีบล็อกเชน", students: [{ name: "กฤษฎา ทองดี", id: "6256789020" }, { name: "ศิริพร สุขเกษม", id: "6256789021" }], major: "INE", year: "4", sec: "B", advisor: "อ.สุดา รักษ์ดี", coadvisor: "อ.สมคิด มีสุข", file: "proposal_blockchain.pdf", status: "อนุมัติการสอบเสร็จสิ้น" }
//     ],
//     INET: [
//         { name_th: "เว็บไซต์จัดจำหน่ายสินค้าของชุมชนท้องถิ่น", name_en: "Local Community Product Website", scope: "พัฒนาเว็บไซต์ E-commerce", students: [{ name: "สมรักษ์ พิทักษ์", id: "6267890123" }, { name: "สุนิสา เจริญสุข", id: "6267890124" }], major: "INET", year: "3", sec: "A", advisor: "อ.นภัสวรรณ วิชาการ", coadvisor: "", file: "proposal_community.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "แอปพลิเคชันช่วยวางแผนการท่องเที่ยว", name_en: "Travel Planning Assistant App", scope: "พัฒนาแอปเพื่อแนะนำสถานที่ท่องเที่ยว", students: [{ name: "เมธาวี โชคดี", id: "6267890125" }, { name: "ณัฐพร รุ่งโรจน์", id: "6267890126" }], major: "INET", year: "3", sec: "B", advisor: "ดร.วรพล ทองดี", coadvisor: "อ.สุดา รักษ์ดี", file: "proposal_travel.pdf", status: "รอการอนุมัติ" },
//         { name_th: "ระบบจัดการสต็อกสินค้าออนไลน์", name_en: "Online Stock Management System", scope: "จัดการสต็อกสินค้าผ่านเว็บไซต์", students: [{ name: "ธนวัฒน์ วิจารณ์", id: "6267890127" }, { name: "พรทิพย์ มีสุข", id: "6267890128" }], major: "INET", year: "4", sec: "C", advisor: "ดร.กนกพร มีชัย", coadvisor: "", file: "proposal_stock.pdf", status: "อนุมัติการสอบเสร็จสิ้น" },
//         { name_th: "ระบบจัดการการขนส่งสินค้า", name_en: "Logistics Management System", scope: "ติดตามสถานะการขนส่งสินค้า", students: [{ name: "กอบชัย สุขสำราญ", id: "6267890129" }, { name: "พงษ์ศักดิ์ บุญศรี", id: "6267890130" }], major: "INET", year: "4", sec: "A", advisor: "อ.สมคิด มีสุข", coadvisor: "", file: "proposal_logistics.pdf", status: "รอการอนุมัติ" },
//         { name_th: "เว็บไซต์ประเมินผลการเรียนรู้สำหรับนักศึกษา", name_en: "Student Learning Assessment Website", scope: "ประเมินผลการเรียนรู้ของนักศึกษา", students: [{ name: "ชลธิชา สุขเกษม", id: "6267890131" }, { name: "ธนากร ศรีทอง", id: "6267890132" }], major: "INET", year: "3", sec: "B", advisor: "อ.นภัสวรรณ วิชาการ", coadvisor: "ดร.อภิชาติ พัฒนาสุข", file: "proposal_assessment.pdf", status: "อนุมัติการสอบเสร็จสิ้น" }
//     ]
// };
const projects = {
    IT: [
        {
            name_th: "ระบบติดตามการซ่อมบำรุงในโรงพยาบาล",
            name_en: "Hospital Maintenance Tracking System",
            scope: "ระบบจัดการงานซ่อมบำรุงในโรงพยาบาล",
            students: [
                { name: "นายกิตติทัษน์ พุ่มเจริญ", id: "6806022510190" },
                { name: "นายกฤษนัย โถมสันเทียะ", id: "6806022510203" }
            ],
            major: "IT", year: "3", sec: "A",
            advisor: "ผศ.นพดล บูรณ์กุศล",
            coadvisor: "ดร.วรพล ทองดี",
            file: "proposal_hospital.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "ระบบบริหารจัดการการเช่าห้องพักสำหรับนักศึกษา",
            name_en: "Student Dormitory Rental Management",
            scope: "จัดการข้อมูลห้องพักและผู้เช่า",
            students: [
                { name: "นายภูมิรพี เมืองไทย", id: "6806022510157" }
            ],
            major: "IT", year: "3", sec: "B",
            advisor: "อ.สุดา รักษ์ดี",
            coadvisor: "อ.ดร.กาญจน ณ ศรีธะ",
            file: "proposal_dorm.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "ระบบจัดการข้อมูลโครงงานพิเศษสำหรับนักศึกษา",
            name_en: "Special Project Management System",
            scope: "ติดตามความคืบหน้าของโครงงาน",
            students: [
                { name: "นายบุญญฤทธิ์ วุฒิ", id: "6806022510173" },
                { name: "นางสาวพัทธนันต์ ขันธลักษณา", id: "6806022510181" }
            ],
            major: "IT", year: "4", sec: "A",
            advisor: "ดร.วิชัย ประสิทธิ์",
            coadvisor: "รศ.ดร.อนิราช มิ่งขวัญ",
            file: "proposal_special.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "แอปพลิเคชันจัดการการเรียนรู้สำหรับนักเรียนประถมศึกษา",
            name_en: "Primary School Learning App",
            scope: "ออกแบบแอปเพื่อเสริมทักษะการเรียนรู้",
            students: [
                { name: "นางสาวไรบีนา มะเก๊ะ", id: "6806022510122" }
            ],
            major: "IT", year: "3", sec: "C",
            advisor: "อ.นิรันดร์ ใจเย็น",
            coadvisor: "ผศ.ดร.บีสุดา ดาวเรือง",
            file: "proposal_learning.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "ระบบการจัดการฐานข้อมูลเชิงสัมพันธ์",
            name_en: "Relational Database Management System",
            scope: "ออกแบบและพัฒนาระบบฐานข้อมูล",
            students: [
                { name: "นายภูวดล เวชชนะ", id: "6806022510131" },
                { name: "นายพีรพล บัวขยาย", id: "6806022510149" }
            ],
            major: "IT", year: "4", sec: "A",
            advisor: "ผศ.ดร.ขนิษฐา นามี",
            coadvisor: "",
            file: "proposal_db.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        }
    ],
    ITI: [
        {
            name_th: "ระบบวิเคราะห์ข้อมูลยอดขายสินค้าออนไลน์",
            name_en: "Online Sales Data Analytics System",
            scope: "วิเคราะห์ข้อมูลเพื่อเพิ่มยอดขาย",
            students: [
                { name: "นางสาวธิติญา โพธิ์ศรี", id: "6806022510084" }
            ],
            major: "ITI", year: "4", sec: "B",
            advisor: "ผศ.นิมิต ศรีคำทา",
            coadvisor: "ผศ.จสต.นพเก้า ทองใบ",
            file: "proposal_analytics.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "แอปพลิเคชันสำหรับจัดการการลงทุน",
            name_en: "Investment Management App",
            scope: "ช่วยวางแผนและติดตามการลงทุน",
            students: [
                { name: "นายนันทวัฒน์ นันทวิสาร", id: "6806022510050" },
                { name: "นายกัณติกรณ์ สรสุริยวงษ์", id: "6806022510068" }
            ],
            major: "ITI", year: "4", sec: "A",
            advisor: "ผศ.ดร.นิติการ นาคเจือทอง",
            coadvisor: "อ.ดร.พิทย์พิมล ชูรอด",
            file: "proposal_investment.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "ระบบรายงานผลการเรียนแบบอัตโนมัติ",
            name_en: "Automated Grade Reporting System",
            scope: "สร้างระบบรายงานผลการเรียน",
            students: [
                { name: "นายกณวรรธน์ เดชแสง", id: "6806022510076" },
                { name: "นายพลากร แพทย์นุเคราะห์", id: "6806022510092" }
            ],
            major: "ITI", year: "3", sec: "C",
            advisor: "ผศ.ดร.นัฎฐพันธ์ นาคพงษ์",
            coadvisor: "ผศ.พีระศักดิ์ เสรีกุล",
            file: "proposal_report.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "ระบบจองห้องประชุมออนไลน์",
            name_en: "Online Meeting Room Booking System",
            scope: "จัดการการจองห้องประชุม",
            students: [
                { name: "นายวุฒิพงษ์ วังรัตน์", id: "6806022510106" }
            ],
            major: "ITI", year: "4", sec: "B",
            advisor: "ผศ.สมชัย เชียงพงศ์พันธุ์",
            coadvisor: "",
            file: "proposal_booking.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "เว็บไซต์สำหรับการจัดการกิจกรรมและข่าวสารในภาควิชา",
            name_en: "Department Event & News Website",
            scope: "ออกแบบเว็บไซต์เพื่อประชาสัมพันธ์",
            students: [
                { name: "นายธนบูลย์ อิ่มเจริญ", id: "6806022510017" },
                { name: "นายวัชโรทัย เลิศวิลัย", id: "6806022510025" }
            ],
            major: "ITI", year: "3", sec: "A",
            advisor: "ผศ.ดร.สุปีติ กุลจันทร์",
            coadvisor: "ผศ.สิวาลัย จินเจือ",
            file: "proposal_website.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        }
    ],
    INE: [
        {
            name_th: "แพลตฟอร์มจัดการตารางเรียนและกิจกรรมสำหรับนักศึกษา",
            name_en: "Student Scheduling & Activity Platform",
            scope: "ช่วยนักศึกษาวางแผนการเรียนและกิจกรรม",
            students: [
                { name: "นายอาณัฐ อรรถวิเวก", id: "6806022510220" }
            ],
            major: "INE", year: "3", sec: "B",
            advisor: "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
            coadvisor: "ผศ.ดร.ศรายุทธ ธเนศสกุลวัฒนา",
            file: "proposal_platform.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "ระบบควบคุมไฟจราจรด้วย AI",
            name_en: "AI-powered Traffic Light Control System",
            scope: "ใช้ AI ควบคุมการจราจร",
            students: [
                { name: "นายธีรภัทร มังเทศ", id: "6806022510238" },
                { name: "นางสาวศุภนิดา แซ่ซิ้ม", id: "6806022510246" }
            ],
            major: "INE", year: "4", sec: "A",
            advisor: "อ.ดร.ศิรินทรา แว่วศรี",
            coadvisor: "อ.ดร.วัชรชัย คงศิริวัฒนา",
            file: "proposal_traffic.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "ระบบควบคุมการทำงานของหุ่นยนต์",
            name_en: "Robot Operation Control System",
            scope: "ควบคุมการเคลื่อนที่และการทำงานของหุ่นยนต์",
            students: [
                { name: "นางสาวณัชพร เก็งสาริกิจ", id: "6806022510254" }
            ],
            major: "INE", year: "4", sec: "C",
            advisor: "ผศ.ดร.วันทนี ประจวบศุภกิจ",
            coadvisor: "รศ.ดร.ยุพิน สรรพคุณ",
            file: "proposal_robot.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "ระบบวัดคุณภาพอากาศแบบเรียลไทม์",
            name_en: "Real-time Air Quality Monitoring System",
            scope: "ใช้เซ็นเซอร์วัดคุณภาพอากาศ",
            students: [
                { name: "นายพัฒนะพงษ์ ชุมปวน", id: "6806022510262" },
                { name: "นายศิริโรจน์ อุดมเดช", id: "6806022510271" }
            ],
            major: "INE", year: "3", sec: "A",
            advisor: "รศ.ดร.อนิราช มิ่งขวัญ",
            coadvisor: "ผศ.อรบุษป์ วุฒิกมลชัย",
            file: "proposal_air.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "การประยุกต์ใช้ Blockchain ในการจัดการข้อมูล",
            name_en: "Blockchain for Data Management",
            scope: "สร้างระบบจัดการข้อมูลด้วยเทคโนโลยีบล็อกเชน",
            students: [
                { name: "นายลัทธพล ศิริหล้า", id: "6806022510289" }
            ],
            major: "INE", year: "4", sec: "B",
            advisor: "ผศ.ดร.บีสุดา ดาวเรือง",
            coadvisor: "ผศ.ดร.ขนิษฐา นามี",
            file: "proposal_blockchain.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        }
    ],
    INET: [
        {
            name_th: "เว็บไซต์จัดจำหน่ายสินค้าของชุมชนท้องถิ่น",
            name_en: "Local Community Product Website",
            scope: "พัฒนาเว็บไซต์ E-commerce",
            students: [
                { name: "นางสาวฐิติรัตน์ แดงประเสริฐ", id: "6806022510297" },
                { name: "นายปุลินภัทร ประสิทธินอก", id: "6806022510301" }
            ],
            major: "INET", year: "3", sec: "A",
            advisor: "อ.ดร.กาญจน ณ ศรีธะ",
            coadvisor: "ผศ.นพดล บูรณ์กุศล",
            file: "proposal_community.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "แอปพลิเคชันช่วยวางแผนการท่องเที่ยว",
            name_en: "Travel Planning Assistant App",
            scope: "พัฒนาแอปเพื่อแนะนำสถานที่ท่องเที่ยว",
            students: [
                { name: "นางสาวนุชนาถ สารพงษ์", id: "6806022510327" }
            ],
            major: "INET", year: "3", sec: "B",
            advisor: "ผศ.จสต.นพเก้า ทองใบ",
            coadvisor: "ผศ.ดร.นิติการ นาคเจือทอง",
            file: "proposal_travel.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "ระบบจัดการสต็อกสินค้าออนไลน์",
            name_en: "Online Stock Management System",
            scope: "จัดการสต็อกสินค้าผ่านเว็บไซต์",
            students: [
                { name: "นายก้องกาย วงษ์มอญ", id: "6806022510319" },
                { name: "นายศตวรรษ บัวผัน", id: "6806022510581" }
            ],
            major: "INET", year: "4", sec: "C",
            advisor: "ผศ.ดร.นัฎฐพันธ์ นาคพงษ์",
            coadvisor: "ผศ.นิมิต ศรีคำทา",
            file: "proposal_stock.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        },
        {
            name_th: "ระบบจัดการการขนส่งสินค้า",
            name_en: "Logistics Management System",
            scope: "ติดตามสถานะการขนส่งสินค้า",
            students: [
                { name: "นายไกรกูล แสงบุตรดี", id: "6806022510599" }
            ],
            major: "INET", year: "4", sec: "A",
            advisor: "ผศ.สมชัย เชียงพงศ์พันธุ์",
            coadvisor: "",
            file: "proposal_logistics.pdf",
            status: "รอการอนุมัติ"
        },
        {
            name_th: "เว็บไซต์ประเมินผลการเรียนรู้สำหรับนักศึกษา",
            name_en: "Student Learning Assessment Website",
            scope: "ประเมินผลการเรียนรู้ของนักศึกษา",
            students: [
                { name: "นายสุทธิพงษ์ แช่มชื่น", id: "6806022510602" },
                { name: "นายวัจน์กร อินยู่", id: "6806022510611" }
            ],
            major: "INET", year: "3", sec: "B",
            advisor: "ผศ.ดร.สุปีติ กุลจันทร์",
            coadvisor: "ผศ.สิวาลัย จินเจือ",
            file: "proposal_assessment.pdf",
            status: "อนุมัติการสอบเสร็จสิ้น"
        }
    ]
};
// สร้าง projects.all โดยรวมทุกสาขา
projects.all = [...projects.IT, ...projects.ITI, ...projects.INE, ...projects.INET];

let currentTab = 'all';
let currentProjectForAppointment = { tab: '', index: -1 };

document.addEventListener('DOMContentLoaded', () => {
    loadProjects('all');
    updateDateTitle();
    setupTabButtons();
});

function setupTabButtons() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentTab = button.dataset.tab;
            // Reset sec and status filters
            document.getElementById('secFilter').value = 'all';
            document.querySelector('input[name="statusFilter"][value="all"]').checked = true;
            document.getElementById('searchProject').value = '';
            loadProjects(currentTab);
        });
    });
}

// ฟังก์ชันสำหรับโหลดข้อมูลโปรเจกต์
function loadProjects(tab) {
    currentTab = tab;
    const tbody = document.getElementById('projectTable');
    tbody.innerHTML = "";
    const secFilter = document.getElementById('secFilter').value;
    const statusFilter = document.querySelector('input[name="statusFilter"]:checked').value;
    const searchText = document.getElementById('searchProject').value.toLowerCase();

    let projectsToDisplay = projects[tab];

    // Filter by Sec
    if (secFilter !== 'all') {
        projectsToDisplay = projectsToDisplay.filter(proj => proj.sec === secFilter);
    }

    // Filter by Status
    if (statusFilter !== 'all') {
        projectsToDisplay = projectsToDisplay.filter(proj => proj.status === statusFilter);
    }

    // Filter by Search Text
    if (searchText) {
        projectsToDisplay = projectsToDisplay.filter(proj => proj.name_th.toLowerCase().includes(searchText));
    }

    if (projectsToDisplay.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" class="py-4 text-center text-gray-500">ไม่พบข้อมูลโครงงาน</td></tr>`;
        return;
    }

    projectsToDisplay.forEach((proj) => {
        const statusClass = proj.status === 'รอการอนุมัติ' ? 'text-yellow-600 font-bold' : 'text-green-600 font-bold';
        const tr = document.createElement('tr');
        tr.className = "border-b border-gray-200 hover:bg-gray-50";

        // หา index ที่ถูกต้องจากอาร์เรย์หลัก
        const originalIndex = projects[tab].indexOf(proj);

        tr.innerHTML = `
                    <td class="py-3 px-6 text-left">${proj.name_th}</td>
                    <td class="py-3 px-6 ${statusClass}">${proj.status}</td>
                    <td class="py-3 px-6 text-center space-x-2">
                        <button onclick="openProjectModal('${tab}', ${originalIndex})" class="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition">รายละเอียด</button>
                        <button onclick="openAppointModal('${tab}', ${originalIndex})" class="${proj.status === 'รอการอนุมัติ' ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white px-4 py-2 rounded-lg shadow-md transition" ${proj.status !== 'รอการอนุมัติ' ? 'disabled' : ''}>แต่งตั้งคณะกรรมการสอบ</button>
                    </td>
                `;
        tbody.appendChild(tr);
    });
}

// ฟังก์ชันสำหรับค้นหาโปรเจกต์ (ปรับปรุงให้ใช้ loadProjects)
function filterProject() {
    loadProjects(currentTab);
}

// ฟังก์ชันสำหรับเปิด Modal รายละเอียดโครงงาน
function openProjectModal(tab, index) {
    const proj = projects[tab][index];
    if (!proj) {
        console.error('ไม่พบโครงงาน:', tab, index);
        return;
    }

    const modal = document.getElementById('projectModal');
    const infoDiv = document.getElementById('projectInfoContent');
    const studentDiv = document.getElementById('studentContent');
    const advisorDiv = document.getElementById('advisorContent');

    infoDiv.innerHTML = `
                <p><strong>ชื่อโครงงาน (TH):</strong> ${proj.name_th}</p>
                <p><strong>ชื่อโครงงาน (EN):</strong> ${proj.name_en}</p>
                <p><strong>ขอบเขตโครงการ:</strong> ${proj.scope}</p>
                <p><strong>สาขา:</strong> ${proj.major}</p>
                <p><strong>ปีการศึกษา:</strong> ${proj.year}</p>
                <p><strong>Sec:</strong> ${proj.sec}</p>
                <p><strong>ไฟล์ Proposal:</strong> <a href="${proj.file}" target="_blank" class="text-indigo-600 underline">${proj.file}</a></p>
            `;

    studentDiv.innerHTML = proj.students.map(s => `<p>${s.name} (${s.id})</p>`).join('');
    advisorDiv.innerHTML = `<p>ที่ปรึกษาหลัก: ${proj.advisor}</p>` + (proj.coadvisor ? `<p>ที่ปรึกษาร่วม: ${proj.coadvisor}</p>` : '');

    modal.classList.remove('hidden');
}

// ฟังก์ชันปิด Modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    if (modalId === 'appointModal') {
        currentProjectForAppointment = { tab: '', index: -1 };
    }
}

// ฟังก์ชันสำหรับเปิด Modal แต่งตั้งคณะกรรมการสอบ
function openAppointModal(tab, index) {
    const proj = projects[tab][index];
    if (!proj) {
        console.error('ไม่พบโครงงาน:', tab, index);
        return;
    }

    currentProjectForAppointment = { tab, index };

    const modal = document.getElementById('appointModal');
    const projectInfoDiv = document.getElementById('appointProjectInfo');

    projectInfoDiv.innerHTML = `
                <p><strong>ชื่อโครงงาน:</strong> ${proj.name_th}</p>
                <p><strong>นักศึกษา:</strong> ${proj.students.map(s => s.name).join(', ')}</p>
                <p><strong>ที่ปรึกษา:</strong> ${proj.advisor}${proj.coadvisor ? ', ' + proj.coadvisor : ''}</p>
            `;

    // โหลดรายชื่ออาจารย์ลงใน select
    ['chairman', 'committee1', 'committee2', 'committee3'].forEach(selectId => {
        const select = document.getElementById(selectId);
        select.innerHTML = '<option value="">เลือกอาจารย์</option>';
        teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher;
            option.textContent = teacher;
            select.appendChild(option);
        });
    });

    // รีเซ็ตฟอร์ม
    document.getElementById('examDate').value = '';
    document.getElementById('examTime').value = '';
    document.getElementById('examRoom').value = '';
    document.getElementById('examDetails').value = '';

    modal.classList.remove('hidden');
}

// ฟังก์ชันยืนยันแต่งตั้งคณะกรรมการ
function submitAppointment() {
    const { tab, index } = currentProjectForAppointment;
    if (tab && index !== -1) {
        projects[tab][index].status = 'อนุมัติการสอบเสร็จสิ้น';
        // อัปเดตข้อมูล Projects.all ด้วย
        const allIndex = projects.all.findIndex(proj => proj.name_th === projects[tab][index].name_th);
        if (allIndex !== -1) {
            projects.all[allIndex].status = 'อนุมัติการสอบเสร็จสิ้น';
        }

        closeModal('appointModal');
        loadProjects(currentTab);
        showAlert();
    }
}

function showAlert() {
    document.getElementById('finalExamAlert').classList.remove('hidden');
}

function hideAlert() {
    document.getElementById('finalExamAlert').classList.add('hidden');
    updateSummaryCards();
}

function updateSummaryCards() {
    const allProjectsCount = projects.all.length;
    const pendingProjectsCount = projects.all.filter(p => p.status === 'รอการอนุมัติ').length;
    const approvedProjectsCount = projects.all.filter(p => p.status === 'อนุมัติการสอบเสร็จสิ้น').length;

    // แก้ไขการเข้าถึง element ให้ถูกต้อง
    document.querySelector('.card.bg-blue-100 p').textContent = allProjectsCount;
    document.querySelector('.card.bg-yellow-100 p').textContent = pendingProjectsCount;
    document.querySelector('.card.bg-green-100 p').textContent = approvedProjectsCount;
}

function updateDateTitle() {
    const now = new Date();
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    };
    const formattedDate = now.toLocaleDateString('th-TH', options).replace('เวลา', 'น.');
    document.getElementById('update-date').textContent = `ข้อมูลปัจจุบัน ณ วันที่ ${formattedDate}`;
}
document.addEventListener('DOMContentLoaded', function() {
    // Get the sidebar and the open/close buttons
    const sidebar = document.getElementById('sidebar');
    const sidebarOpenBtn = document.getElementById('sidebar-open-btn'); // Add a button to open the sidebar
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    // Function to open the sidebar
    function openSidebar() {
        sidebar.classList.remove('-left-full'); // Or whichever class you use to hide it
        sidebar.classList.add('left-0');
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.remove('left-0');
        sidebar.classList.add('-left-full'); // Or whichever class you use to hide it
    }

    // Add a click event to the close button
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }
    
    // Add a click event to an open button (you'll need to add this to your HTML)
    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener('click', openSidebar);
    }

    // แก้ไข: ปรับโค้ดการปิด sidebar เมื่อคลิกนอกพื้นที่
    // เพิ่มเงื่อนไขว่าโค้ดนี้จะทำงานเฉพาะบนหน้าจอขนาดเล็กกว่า 1024px เท่านั้น
    window.addEventListener('click', function(event) {
        if (window.innerWidth < 1024) { // ตรวจสอบขนาดหน้าจอ
            if (!sidebar.contains(event.target) && !event.target.closest('#sidebar-open-btn')) {
                closeSidebar();
            }
        }
    });

    // Add responsive behavior based on screen size
    function handleResize() {
        if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
            sidebar.classList.remove('fixed', '-left-full');
            sidebar.classList.add('relative', 'left-0');
        } else {
            sidebar.classList.remove('relative', 'left-0');
            sidebar.classList.add('fixed', '-left-full');
        }
    }

    // Run on page load and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);
});