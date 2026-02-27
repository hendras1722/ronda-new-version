export const MENU = [
  {
    id: 'laporan',
    label: 'Laporan',
    to: '/laporan',
    icon: 'i-line-md-file-filled',
    permission: ['*']
  },
  {
    id: 'warga',
    label: 'Warga',
    to: '/anggota',
    icon: 'i-line-md-account-small',
    permission: ['*']
  },
  {
    id: 'jimpitan',
    label: 'Jimpitan',
    to: '/jimpitan',
    icon: 'i-line-md-square-filled',
    permission: ['*']
  },
  {
    id: 'ronda',
    label: 'Jadwal Ronda',
    to: '/ronda',
    icon: 'i-line-md-sunny-filled-loop-to-moon-filled-alt-loop-transition',
    permission: ['*']
  },
  {
    id: 'verification',
    label: 'Verifikasi Warga',
    to: '/verification',
    icon: 'i-line-md-folder-check-filled',
    permission: ['ketua', 'super_admin']
  },
  {
    id: 'pembukuan',
    label: 'Pembukuan',
    to: '/pembukuan',
    icon: 'i-line-md-text-box-twotone-to-text-box-multiple-twotone-transition',
    permission: ['bendahara', 'super_admin', 'ketua']
  },
];

// export const settingsMenu = [
//   {
//     id: 'settings',
//     label: 'Settings',
//     icon: 'tabler:settings',
//     children: [
//       {
//         id: 'profile',
//         label: 'Profile',
//         to: '/dashboard/settings/profile'
//       },
//       {
//         id: 'security',
//         label: 'Security',
//         children: [
//           {
//             id: 'change-password',
//             label: 'Change Password',
//             to: '/dashboard/settings/security/password'
//           },
//           {
//             id: 'two-factor',
//             label: 'Two-Factor Auth',
//             to: '/dashboard/settings/security/2fa'
//           },
//           {
//             id: 'sessions',
//             label: 'Active Sessions',
//             to: '/dashboard/settings/security/sessions'
//           }
//         ]
//       },
//       {
//         id: 'preferences',
//         label: 'Preferences',
//         to: '/dashboard/settings/preferences'
//       }
//     ]
//   }
// ];