interface Utils {
  // Add any utility functions here
  title: string;
}

export default function useDashboard(): Utils {
  // Add any utility functions here
  const title = 'Dashboard';

  return {
    // Return utility functions and state here
    title,
  };
}
