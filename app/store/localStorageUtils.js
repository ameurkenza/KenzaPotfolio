export const loadState = () => {
  try {
    if (typeof window === 'undefined') return undefined;
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Erreur de chargement du localStorage", e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState", serializedState);
    }
  } catch (e) {
    console.warn("Erreur de sauvegarde dans localStorage", e);
  }
};
