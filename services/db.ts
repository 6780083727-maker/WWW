import { Item, Requisition, User, Role, RequisitionStatus } from '../types';

// Initial Mock Data
const MOCK_USERS: User[] = [
  { id: 'u1', username: 'admin', fullname: 'วีระศวัส นันทิเดชาพันธ์ (Admin)', position: 'หัวหน้างานพัสดุ', department: 'สำนักงาน', role: 'ADMIN' },
  { id: 'u2', username: 'director', fullname: 'ผอ. อำนาจ ชีวังกูล', position: 'ผู้อำนวยการ', department: 'ผู้บริหาร', role: 'VIEWER' },
  { id: 'u3', username: 'อังคณา', fullname: 'นางสาวอังคณา พวงจำปา', position: 'ครูชำนาญการ', department: 'กลุ่มบริหารงานบุคคล', role: 'STAFF' },
  { id: 'u4', username: 'ปนัดดา', fullname: 'นางสาวปนัดดา สอนสระคู', position: 'ครูชำนาญการ', department: 'กลุ่มบริหารงานบุคคล', role: 'STAFF' },
  { id: 'u5', username: 'มยุรฉัตร', fullname: 'นางสาวมยุรฉัตร เช้าวันดี', position: 'ครูผู้ช่วย', department: 'กลุ่มบริหารงานบุคคล', role: 'STAFF' },
  { id: 'u6', username: 'ปาลิตา', fullname: 'นางสาวปาลิตา เสละ', position: 'ครูผู้ช่วย', department: 'กลุ่มบริหารงานบุคคล', role: 'STAFF' },
  { id: 'u7', username: 'จริยา', fullname: 'นางจริยา ภูริธิติมา', position: 'รองผู้อำนวยการโรงเรียน', department: 'ผู้บริหาร', role: 'STAFF' },
  { id: 'u8', username: 'สุชัย', fullname: 'นายสุชัย เครือพันธุ์ทอง', position: 'ครู', department: 'กลุ่มบริหารทั่วไป', role: 'STAFF' },
  { id: 'u9', username: 'ธันธวัช', fullname: 'นายธันธวัช ทองจาด', position: 'ครูอัตราจ้าง', department: 'กลุ่มบริหารทั่วไป', role: 'STAFF' },
  { id: 'u10', username: 'ฐนัสธร', fullname: 'นายฐนัสธร คล้ายสุขพงษ์', position: 'ครูผู้ช่วย', department: 'กลุ่มบริหารทั่วไป', role: 'STAFF' },
  { id: 'u11', username: 'พัชรีภรณ์', fullname: 'นางสาวพัชรีภรณ์ เชื้อสาวะถี', position: 'ครู', department: 'กลุ่มบริหารทั่วไป', role: 'STAFF' },
  { id: 'u12', username: 'กรรธิมา', fullname: 'นางสาวกรรธิมา ไพราม', position: 'ครูอัตราจ้าง', department: 'กลุ่มบริหารทั่วไป', role: 'STAFF' },
  { id: 'u13', username: 'สิทธิพจน์', fullname: 'นายสิทธิพจน์ อ้นฟัก', position: 'ครู', department: 'กลุ่มบริหารวิชาการ', role: 'STAFF' },
  { id: 'u14', username: 'มูนีเร๊าะ', fullname: 'นางสาวมูนีเร๊าะ เต๊ะแต', position: 'ครูผู้ช่วย', department: 'กลุ่มบริหารวิชาการ', role: 'STAFF' },
  { id: 'u15', username: 'จารุวรรณ', fullname: 'นางสาวจารุวรรณ บุญทานันท์', position: 'ครูผู้ช่วย', department: 'กลุ่มบริหารวิชาการ', role: 'STAFF' },
  { id: 'u16', username: 'ธนากร', fullname: 'นายธนากร สมใจ', position: 'ครูผู้ช่วย', department: 'กลุ่มบริหารวิชาการ', role: 'STAFF' },
  { id: 'u17', username: 'นันทกา', fullname: 'นางสาวนันทกา กาบทอง', position: 'ครู', department: 'กลุ่มบริหารงบประมาณ', role: 'STAFF' },
  { id: 'u18', username: 'พิชญา', fullname: 'นางสาวพิชญา พรรณนนท์', position: 'ครู', department: 'กลุ่มบริหารงบประมาณ', role: 'STAFF' },
  { id: 'u19', username: 'พีรภาว์', fullname: 'นางสาวพีรภาว์ อุตมะ', position: 'ครูผู้ช่วย', department: 'กลุ่มบริหารงบประมาณ', role: 'STAFF' },
  { id: 'u20', username: 'อภิญญา', fullname: 'นางสาวอภิญญา ประเสริฐกลาง', position: 'ครูอัตราจ้าง', department: 'กลุ่มบริหารงบประมาณ', role: 'STAFF' },
];

const MOCK_ITEMS: Item[] = [
  { id: 'i1', code: 'OFF-001', name: 'กระดาษ A4 Double A (80g)', category: 'วัสดุสำนักงาน', unit: 'รีม', quantity: 45, minQuantity: 10, location: 'ตู้ 1 ชั้น 2', lastUpdated: '2023-10-01' },
  { id: 'i2', code: 'OFF-002', name: 'ปากกาไวท์บอร์ด (น้ำเงิน)', category: 'วัสดุสำนักงาน', unit: 'ด้าม', quantity: 120, minQuantity: 20, location: 'ตู้ 1 ชั้น 1', lastUpdated: '2023-10-05' },
  { id: 'i3', code: 'COM-001', name: 'เมาส์ไร้สาย Logitech', category: 'อุปกรณ์คอมพิวเตอร์', unit: 'อัน', quantity: 5, minQuantity: 5, location: 'ห้อง Server', lastUpdated: '2023-09-20' },
  { id: 'i4', code: 'CL-001', name: 'น้ำยาถูพื้น 3.5 ลิตร', category: 'วัสดุงานบ้านงานครัว', unit: 'แกลลอน', quantity: 8, minQuantity: 5, location: 'ห้องแม่บ้าน', lastUpdated: '2023-10-10' },
  { id: 'i5', code: 'EDU-001', name: 'กระดาษสี หน้าเดียว', category: 'สื่อการสอน', unit: 'ห่อ', quantity: 50, minQuantity: 15, location: 'ตู้ 2 ชั้น 3', lastUpdated: '2023-10-02' },
];

const MOCK_REQUISITIONS: Requisition[] = [
  {
    id: 'R-2566-001',
    requesterId: 'u3',
    requesterName: 'นางสาวอังคณา พวงจำปา',
    department: 'กลุ่มบริหารงานบุคคล',
    requestDate: '2023-10-15',
    reason: 'ใช้ประกอบการเรียนการสอน',
    status: 'APPROVED',
    items: [{ itemId: 'i2', itemName: 'ปากกาไวท์บอร์ด (น้ำเงิน)', requestQty: 5 }],
    approveDate: '2023-10-16'
  },
  {
    id: 'R-2566-002',
    requesterId: 'u3',
    requesterName: 'นางสาวอังคณา พวงจำปา',
    department: 'กลุ่มบริหารงานบุคคล',
    requestDate: '2023-10-20',
    reason: 'จัดบอร์ดนิทรรศการ',
    status: 'PENDING',
    items: [
      { itemId: 'i1', itemName: 'กระดาษ A4 Double A (80g)', requestQty: 2 },
      { itemId: 'i5', itemName: 'กระดาษสี หน้าเดียว', requestQty: 10 }
    ]
  }
];

// Helper to load/save
const load = <T,>(key: string, defaultData: T): T => {
  const stored = localStorage.getItem(key);
  if (!stored) return defaultData;
  try {
    return JSON.parse(stored);
  } catch {
    return defaultData;
  }
};

const save = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Service Class
class DBService {
  // Use v2 key to force load new mock data
  getUsers(): User[] {
    return load('ws_users_v2', MOCK_USERS);
  }

  saveUser(user: User) {
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx >= 0) {
      users[idx] = user;
    } else {
      users.push(user);
    }
    save('ws_users_v2', users);
  }

  deleteUser(id: string) {
    const users = this.getUsers().filter(u => u.id !== id);
    save('ws_users_v2', users);
  }

  getItems(): Item[] {
    return load('ws_items', MOCK_ITEMS);
  }

  saveItem(item: Item) {
    const items = this.getItems();
    const idx = items.findIndex(i => i.id === item.id);
    if (idx >= 0) {
      items[idx] = { ...item, lastUpdated: new Date().toISOString().split('T')[0] };
    } else {
      items.push({ ...item, lastUpdated: new Date().toISOString().split('T')[0] });
    }
    save('ws_items', items);
  }

  deleteItem(id: string) {
    const items = this.getItems().filter(i => i.id !== id);
    save('ws_items', items);
  }

  getRequisitions(): Requisition[] {
    return load('ws_requisitions', MOCK_REQUISITIONS);
  }

  createRequisition(req: Omit<Requisition, 'id' | 'requestDate' | 'status'>) {
    const all = this.getRequisitions();
    const newReq: Requisition = {
      ...req,
      id: `R-2566-${(all.length + 1).toString().padStart(3, '0')}`,
      requestDate: new Date().toISOString().split('T')[0],
      status: 'PENDING'
    };
    all.unshift(newReq);
    save('ws_requisitions', all);
  }

  updateRequisitionStatus(id: string, status: RequisitionStatus, note?: string) {
    const reqs = this.getRequisitions();
    const items = this.getItems();
    const idx = reqs.findIndex(r => r.id === id);
    
    if (idx >= 0) {
      const req = reqs[idx];
      
      // If approving, deduct stock
      if (status === 'APPROVED' && req.status !== 'APPROVED') {
        let stockIssue = false;
        // Check stock first
        req.items.forEach(reqItem => {
          const invItem = items.find(i => i.id === reqItem.itemId);
          if (!invItem || invItem.quantity < reqItem.requestQty) {
            stockIssue = true;
          }
        });

        if (stockIssue) {
          throw new Error("สต็อกสินค้าไม่เพียงพอ ไม่สามารถอนุมัติได้");
        }

        // Deduct
        req.items.forEach(reqItem => {
          const itemIdx = items.findIndex(i => i.id === reqItem.itemId);
          if (itemIdx >= 0) {
            items[itemIdx].quantity -= reqItem.requestQty;
          }
        });
        save('ws_items', items);
      }

      reqs[idx] = { 
        ...req, 
        status, 
        approverNote: note,
        approveDate: status === 'APPROVED' ? new Date().toISOString().split('T')[0] : undefined
      };
      save('ws_requisitions', reqs);
    }
  }

  login(username: string): User | null {
    const users = this.getUsers();
    return users.find(u => u.username === username) || null;
  }
}

export const db = new DBService();