export type SelectedPackageContext = {
  destinationId?: string;
  destinationName?: string;
  packageId: string;
  packageName?: string;
  packageDuration?: string;
  packageType?: string;
  packagePrice?: { min: number; max: number };
};

const SESSION_KEY = 'dr_selected_package';
const LEADS_KEY = 'dr_leads';

export function setPendingSelection(selection: SelectedPackageContext) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(selection));
  } catch {}
}

export function getPendingSelection(): SelectedPackageContext | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SelectedPackageContext;
  } catch {
    return null;
  }
}

export function clearPendingSelection() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {}
}

export function saveLead(source: string, data: any) {
  try {
    const now = new Date().toISOString();
    const lead = { id: crypto?.randomUUID?.() || `${Date.now()}`, source, at: now, data };
    const raw = localStorage.getItem(LEADS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.push(lead);
    localStorage.setItem(LEADS_KEY, JSON.stringify(list));
  } catch {}
}

