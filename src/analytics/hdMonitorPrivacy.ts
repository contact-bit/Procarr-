const OPT_OUT_KEY = 'hd-monitor-optout';

/** Droit d'opposition : choix mémorisé dans ce navigateur, ou signal Global Privacy Control. */
export function isHDMonitorOptedOut(): boolean {
  if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true) return true;
  try {
    return localStorage.getItem(OPT_OUT_KEY) === '1';
  } catch {
    return false;
  }
}

export function setHDMonitorOptOut(optOut: boolean) {
  try {
    if (optOut) localStorage.setItem(OPT_OUT_KEY, '1');
    else localStorage.removeItem(OPT_OUT_KEY);
  } catch {
    // stockage indisponible (navigation privée stricte) : rien à mémoriser
  }
}
