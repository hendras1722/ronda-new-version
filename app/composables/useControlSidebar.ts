export function useControlSidebar() {
  const sidebarCollapsed = useState('sidebar-collapsed', () => false);
  const sidebarWidth = useState('sidebar-width', () => 256);
  const isResizing = useState('sidebar-is-resizing', () => false);

  const openMenus = useState<{ [key: string]: string }>('sidebar-open-menus', () => ({}));

  function handleMenuToggle(menuId: string, value: string) {
    openMenus.value[menuId] = value;
  }

  const sidebarClasses = computed(() => [
    'fixed inset-y-0 left-0 z-50 bg-white shadow-lg transition-all duration-300 ease-in-out',
    sidebarCollapsed.value ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'w-64'
  ]);

  const sidebarStyles = computed(() =>
    !sidebarCollapsed.value && sidebarWidth.value ? { width: `${sidebarWidth.value}px` } : {}
  );

  const mainContentClasses = computed(() => [
    'flex flex-col transition-all duration-300 ease-in-out min-h-screen',
    sidebarCollapsed.value ? 'lg:ml-16' : 'lg:ml-64'
  ]);

  const mainContentStyles = computed(() =>
    !sidebarCollapsed.value && sidebarWidth.value ? { marginLeft: `${sidebarWidth.value}px` } : {}
  );

  function startResize() {
    if (isResizing.value) return;
    isResizing.value = true;

    const handleMove = (e: MouseEvent) => {
      if (!isResizing.value) return;
      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 400) {
        sidebarWidth.value = newWidth;
      }
    };

    const handleStop = () => {
      isResizing.value = false;
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleStop);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleStop);
  }

  function handleWindowResize() {
    if (window.innerWidth < 1024) {
      sidebarCollapsed.value = true;
    }
  }

  onMounted(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleWindowResize);
  });

  return {
    sidebarClasses,
    sidebarStyles,
    mainContentClasses,
    mainContentStyles,
    startResize,
    handleWindowResize,
    handleMenuToggle,
    openMenus,
    sidebarCollapsed,
    isResizing
  };
}