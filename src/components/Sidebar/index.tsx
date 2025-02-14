"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MAIN MENU",
    menuItems: [
      {
        icon: (
          <svg
            className="text- fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00009 17.2498C8.58588 17.2498 8.25009 17.5856 8.25009 17.9998C8.25009 18.414 8.58588 18.7498 9.00009 18.7498H15.0001C15.4143 18.7498 15.7501 18.414 15.7501 17.9998C15.7501 17.5856 15.4143 17.2498 15.0001 17.2498H9.00009Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25C11.2749 1.25 10.6134 1.44911 9.88928 1.7871C9.18832 2.11428 8.37772 2.59716 7.36183 3.20233L5.90622 4.06943C4.78711 4.73606 3.89535 5.26727 3.22015 5.77524C2.52314 6.29963 1.99999 6.8396 1.65907 7.55072C1.31799 8.26219 1.22554 9.0068 1.25519 9.87584C1.2839 10.717 1.43105 11.7397 1.61556 13.0219L1.90792 15.0537C2.14531 16.7036 2.33368 18.0128 2.61512 19.0322C2.90523 20.0829 3.31686 20.9169 4.05965 21.5565C4.80184 22.1956 5.68984 22.4814 6.77634 22.6177C7.83154 22.75 9.16281 22.75 10.8423 22.75H13.1577C14.8372 22.75 16.1685 22.75 17.2237 22.6177C18.3102 22.4814 19.1982 22.1956 19.9404 21.5565C20.6831 20.9169 21.0948 20.0829 21.3849 19.0322C21.6663 18.0129 21.8547 16.7036 22.0921 15.0537L22.3844 13.0219C22.569 11.7396 22.7161 10.717 22.7448 9.87584C22.7745 9.0068 22.682 8.26219 22.3409 7.55072C22 6.8396 21.4769 6.29963 20.7799 5.77524C20.1047 5.26727 19.2129 4.73606 18.0938 4.06943L16.6382 3.20233C15.6223 2.59716 14.8117 2.11428 14.1107 1.7871C13.3866 1.44911 12.7251 1.25 12 1.25ZM8.09558 4.51121C9.15309 3.88126 9.89923 3.43781 10.5237 3.14633C11.1328 2.86203 11.5708 2.75 12 2.75C12.4293 2.75 12.8672 2.86203 13.4763 3.14633C14.1008 3.43781 14.8469 3.88126 15.9044 4.51121L17.2893 5.33615C18.4536 6.02973 19.2752 6.52034 19.8781 6.9739C20.4665 7.41662 20.7888 7.78294 20.9883 8.19917C21.1877 8.61505 21.2706 9.09337 21.2457 9.82469C21.2201 10.5745 21.0856 11.5163 20.8936 12.8511L20.6148 14.7884C20.3683 16.5016 20.1921 17.7162 19.939 18.633C19.6916 19.5289 19.3939 20.0476 18.9616 20.4198C18.5287 20.7926 17.9676 21.0127 17.037 21.1294C16.086 21.2486 14.8488 21.25 13.1061 21.25H10.8939C9.15124 21.25 7.91405 21.2486 6.963 21.1294C6.03246 21.0127 5.47129 20.7926 5.03841 20.4198C4.60614 20.0476 4.30838 19.5289 4.06102 18.633C3.80791 17.7162 3.6317 16.5016 3.3852 14.7884L3.10643 12.851C2.91437 11.5163 2.77991 10.5745 2.75432 9.82469C2.72937 9.09337 2.81229 8.61505 3.01167 8.19917C3.21121 7.78294 3.53347 7.41662 4.12194 6.9739C4.72482 6.52034 5.54643 6.02973 6.71074 5.33615L8.09558 4.51121Z"
              fill=""
            />
          </svg>
        ),
        label: "Dashboard",
        route: "/",
        // children: [
        //   { label: "eCommerce", route: "/" },
        // ],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M10.29 21.961h-.9c-3.248 0-4.873 0-5.882-1.025S2.5 18.261 2.5 14.961v-5c0-3.3 0-4.95 1.01-5.974C4.517 2.96 6.142 2.96 9.39 2.96h2.953c3.249 0 5.147.056 6.156 1.08c1.01 1.026 1 2.62 1 5.92v1.187M15.945 2v2m-5-2v2m-5-2v2M7 15h4m-4-5h8"/><path d="M20.76 14.879c-.906-1.015-1.449-.954-2.052-.773c-.423.06-1.871 1.75-2.475 2.29c-.991.978-1.987 1.986-2.052 2.118c-.188.305-.362.845-.447 1.449c-.157.906-.383 1.925-.097 2.013s1.087-.08 1.992-.213c.604-.11 1.026-.23 1.328-.411c.423-.254 1.207-1.147 2.56-2.476c.847-.893 1.665-1.51 1.907-2.113c.241-.906-.12-1.39-.664-1.885" opacity="0.93"/></g></svg>
        ),
        label: "Articles",
        route: "/articles",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 1.25C9.37654 1.25 7.24989 3.37665 7.24989 6C7.24989 8.62335 9.37654 10.75 11.9999 10.75C14.6232 10.75 16.7499 8.62335 16.7499 6C16.7499 3.37665 14.6232 1.25 11.9999 1.25ZM8.74989 6C8.74989 4.20507 10.205 2.75 11.9999 2.75C13.7948 2.75 15.2499 4.20507 15.2499 6C15.2499 7.79493 13.7948 9.25 11.9999 9.25C10.205 9.25 8.74989 7.79493 8.74989 6Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 12.25C9.68634 12.25 7.55481 12.7759 5.97534 13.6643C4.41937 14.5396 3.24989 15.8661 3.24989 17.5L3.24982 17.602C3.24869 18.7638 3.24728 20.222 4.5263 21.2635C5.15577 21.7761 6.03637 22.1406 7.2261 22.3815C8.41915 22.6229 9.97412 22.75 11.9999 22.75C14.0257 22.75 15.5806 22.6229 16.7737 22.3815C17.9634 22.1406 18.844 21.7761 19.4735 21.2635C20.7525 20.222 20.7511 18.7638 20.75 17.602L20.7499 17.5C20.7499 15.8661 19.5804 14.5396 18.0244 13.6643C16.445 12.7759 14.3134 12.25 11.9999 12.25ZM4.74989 17.5C4.74989 16.6487 5.37127 15.7251 6.71073 14.9717C8.02669 14.2315 9.89516 13.75 11.9999 13.75C14.1046 13.75 15.9731 14.2315 17.289 14.9717C18.6285 15.7251 19.2499 16.6487 19.2499 17.5C19.2499 18.8078 19.2096 19.544 18.5263 20.1004C18.1558 20.4022 17.5364 20.6967 16.4761 20.9113C15.4192 21.1252 13.9741 21.25 11.9999 21.25C10.0257 21.25 8.58063 21.1252 7.52368 20.9113C6.46341 20.6967 5.84401 20.4022 5.47348 20.1004C4.79021 19.544 4.74989 18.8078 4.74989 17.5Z"
              fill=""
            />
          </svg>
        ),
        label: "Doctors",
        route: "/doctors",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 22V8c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22zM6.5 11h-1m5 0h-1m-3-4h-1m1 8h-1m5-8h-1m1 8h-1m9 0h-1m1-4h-1m.5-3h-4v14h4c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8" color="currentColor"/></svg>
        ),
        label: "Branches",
        route: "/branches",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.417 15.713c3.951-5.01 2.884-9.978.046-11.719c-2.682-1.645-5.023-.982-6.429.074L12 4.842m7.417 10.871c-.948 1.203-2.185 2.407-3.757 3.57C14.115 20.428 13.342 21 12 21s-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994c2.682-1.645 5.023-.982 6.429.074L12 4.842m7.417 10.871l-5.525-6.268a.7.7 0 0 0-.895-.13l-2.186 1.366a1.965 1.965 0 0 1-2.233-3.23L12 4.841" color="currentColor"/></svg>
        ),
        label: "Services",
        route: "/services",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-4h8l4 4H4zm0 8h4"/></svg>
        ),
        label: "Catalogs",
        route: "/catalogs",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.113c0-.553 0-.83.043-1.06a2.51 2.51 0 0 1 1.996-2.01C5.267 2 5.542 2 6.09 2h11.82c.548 0 .823 0 1.051.043a2.51 2.51 0 0 1 1.996 2.01c.043.23.043.507.043 1.06c0 .542 0 .813-.032 1.065a4.04 4.04 0 0 1-1.603 2.744c-.202.15-.438.282-.908.545l-2.572 1.439C13.986 11.969 13.037 12.5 12 12.5s-1.986-.531-3.885-1.594l-2.572-1.44c-.47-.262-.705-.394-.908-.544a4.04 4.04 0 0 1-1.603-2.744C3 5.926 3 5.655 3 5.113M8 5v1m4-1v3m4-3v1m-3.223 7.65l.792 1.597a.98.98 0 0 0 .64.476l1.435.24c.917.155 1.133.826.472 1.489L15 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0" color="currentColor"/></svg>
        ),
        label: "Achievements",
        route: "/achievements",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.128 1.612-.383c6.199-2.373 8.796-8.471 7.606-15.067c-.111-.616-.167-.925-.357-1.136s-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2"/><path d="M10.337 10.38c-1.08 0-1.62.78-1.74 1.26s-.12 2.22-.048 2.94c.24.9.84 1.272 1.428 1.392c.54.048 2.82.03 3.48.03c.96.018 1.68-.342 1.98-1.422c.06-.36.12-2.34-.03-2.94c-.318-.96-1.11-1.26-1.71-1.26zm-.087-.421c0-.06.008-.406.01-.84c0-.398-.034-.78.156-1.13c.71-1.414 2.75-1.27 3.254.17c.087.237.093.612.09.96c-.003.443.006.84.006.84"/></g></svg>
        ),
        label: "Legality",
        route: "/legality",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.737 5.15a2.643 2.643 0 1 0 .111 3.881A3.75 3.75 0 0 0 12 10.751a3.75 3.75 0 0 0 3.152-1.718a2.643 2.643 0 1 0 .111-3.881A3.75 3.75 0 0 0 12 3.25a3.75 3.75 0 0 0-3.263 1.9M9.75 7a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m-1.412-.81a3.76 3.76 0 0 0 .052 1.829a1.642 1.642 0 0 1-3.033-.876a1.643 1.643 0 0 1 2.98-.954m7.272 1.829a3.75 3.75 0 0 0 .052-1.83a1.643 1.643 0 1 1-.052 1.83M4.951 10.297c.347-.092.675.022.901.186c.09.065.214.145.365.218a.5.5 0 0 1-.435.9a3.4 3.4 0 0 1-.517-.308a.2.2 0 0 0-.053-.027l-.007-.001a7 7 0 0 0-.401.12l-.686.224a1.63 1.63 0 0 0-1.066 1.114l-.283 2.049c-.056.403.157.705.46.777q.335.082.813.16a.5.5 0 1 1-.16.988a12 12 0 0 1-.884-.175c-.895-.213-1.333-1.07-1.22-1.887l.292-2.106l.006-.027a2.62 2.62 0 0 1 1.73-1.843l.685-.225q.23-.075.46-.137m14.229 0a1.07 1.07 0 0 0-.9.186c-.09.065-.214.145-.365.218a.5.5 0 0 0 .435.9a3.4 3.4 0 0 0 .517-.308a.2.2 0 0 1 .053-.027l.007-.001q.203.053.401.12l.686.224c.526.173.925.594 1.066 1.114l.283 2.049c.056.403-.156.705-.46.777a11 11 0 0 1-.813.16a.5.5 0 1 0 .16.988q.512-.085.884-.175c.895-.213 1.333-1.07 1.22-1.887l-.292-2.106l-.006-.027a2.62 2.62 0 0 0-1.73-1.843l-.685-.225a9 9 0 0 0-.46-.137"/><path fill="currentColor" d="M13.653 11.712c.396-.263.973-.47 1.583-.297q.24.067.477.145l.959.315a3.72 3.72 0 0 1 2.454 2.616l.01.04l.409 2.95c.161 1.164-.463 2.393-1.744 2.698c-1.17.279-3.053.571-5.8.571c-2.75 0-4.631-.292-5.802-.57c-1.281-.306-1.905-1.535-1.744-2.698l.408-2.95l.01-.04a3.72 3.72 0 0 1 2.455-2.617l.96-.315q.237-.077.476-.146c.61-.172 1.188.035 1.583.298c.36.238.942.524 1.653.524s1.294-.286 1.653-.524m1.175 1.146c-.048-.014-.171-.012-.345.103c-.502.333-1.373.775-2.483.775s-1.981-.442-2.482-.775c-.175-.115-.298-.117-.346-.103q-.21.06-.416.127l-.96.315a2.23 2.23 0 0 0-1.459 1.523l-.396 2.864c-.075.544.21.939.606 1.033c1.047.25 2.811.53 5.453.53s4.407-.28 5.453-.53c.396-.094.681-.489.606-1.033l-.396-2.864a2.23 2.23 0 0 0-1.46-1.523l-.958-.315a10 10 0 0 0-.417-.127"/></svg>
        ),
        label: "Subscribers",
        route: "/subscribers",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h8m-8 4h4m0 8c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"/></svg>
        ),
        label: "FaQs",
        route: "/faqs",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM19.5 7h-15v-.75c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75zm-15 1.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z"/></svg>
        ),
        label: "Pop Up",
        route: "/popup",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M10.996 10h.015M11 16h.015M7 13h8"/><circle cx="1.5" cy="1.5" r="1.5" transform="matrix(1 0 0 -1 16 8)"/><path d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34 34 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92 92 0 0 0 8.516-8.698a1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374s-6.578-1.066-8.374-.901a1.95 1.95 0 0 0-1.094.47a92 92 0 0 0-8.698 8.515"/></g></svg>
        ),
        label: "Promo",
        route: "/promo",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"/><path fill="currentColor" d="M12 1q.4 0 .797.028c.763.055 1.345.617 1.512 1.304l.352 1.45c.019.078.09.171.225.221q.37.134.728.302c.13.061.246.044.315.002l1.275-.776c.603-.368 1.411-.353 1.99.147q.604.524 1.128 1.129c.501.578.515 1.386.147 1.99l-.776 1.274c-.042.069-.058.185.002.315q.168.357.303.728c.048.135.142.205.22.225l1.45.352c.687.167 1.249.749 1.303 1.512q.057.797 0 1.594c-.054.763-.616 1.345-1.303 1.512l-1.45.352c-.078.019-.171.09-.221.225q-.134.372-.302.728c-.061.13-.044.246-.002.315l.776 1.275c.368.603.353 1.411-.147 1.99q-.524.605-1.129 1.128c-.578.501-1.386.515-1.99.147l-1.274-.776c-.069-.042-.185-.058-.314.002a9 9 0 0 1-.729.303c-.135.048-.205.142-.225.22l-.352 1.45c-.167.687-.749 1.249-1.512 1.303q-.797.057-1.594 0c-.763-.054-1.345-.616-1.512-1.303l-.352-1.45c-.019-.078-.09-.171-.225-.221a8 8 0 0 1-.728-.302c-.13-.061-.246-.044-.315-.002l-1.275.776c-.603.368-1.411.353-1.99-.147q-.605-.524-1.128-1.129c-.501-.578-.515-1.386-.147-1.99l.776-1.274c.042-.069.058-.185-.002-.314a9 9 0 0 1-.303-.729c-.048-.135-.142-.205-.22-.225l-1.45-.352c-.687-.167-1.249-.749-1.304-1.512a11 11 0 0 1 0-1.594c.055-.763.617-1.345 1.304-1.512l1.45-.352c.078-.019.171-.09.221-.225q.134-.372.302-.728c.061-.13.044-.246.002-.315l-.776-1.275c-.368-.603-.353-1.411.147-1.99q.524-.605 1.129-1.128c.578-.501 1.386-.515 1.99-.147l1.274.776c.069.042.185.058.315-.002q.357-.168.728-.303c.135-.048.205-.142.225-.22l.352-1.45c.167-.687.749-1.249 1.512-1.304Q11.598 1 12 1m-.69 1.525c-.055.004-.135.05-.161.161l-.353 1.45a1.83 1.83 0 0 1-1.172 1.277a7 7 0 0 0-.6.249a1.83 1.83 0 0 1-1.734-.074l-1.274-.776c-.098-.06-.186-.036-.228 0a10 10 0 0 0-.976.976c-.036.042-.06.131 0 .228l.776 1.274c.314.529.342 1.18.074 1.734a7 7 0 0 0-.249.6a1.83 1.83 0 0 1-1.278 1.173l-1.45.351c-.11.027-.156.107-.16.162a10 10 0 0 0 0 1.38c.004.055.05.135.161.161l1.45.353a1.83 1.83 0 0 1 1.277 1.172q.111.306.249.6c.268.553.24 1.204-.074 1.733l-.776 1.275c-.06.098-.036.186 0 .228q.453.523.976.976c.042.036.131.06.228 0l1.274-.776a1.83 1.83 0 0 1 1.734-.075q.294.14.6.25a1.83 1.83 0 0 1 1.173 1.278l.351 1.45c.027.11.107.156.162.16a10 10 0 0 0 1.38 0c.055-.004.135-.05.161-.161l.353-1.45a1.83 1.83 0 0 1 1.172-1.278a7 7 0 0 0 .6-.248a1.83 1.83 0 0 1 1.733.074l1.275.776c.098.06.186.036.228 0q.523-.453.976-.976c.036-.042.06-.131 0-.228l-.776-1.275a1.83 1.83 0 0 1-.075-1.733q.14-.294.25-.6a1.83 1.83 0 0 1 1.278-1.173l1.45-.351c.11-.027.156-.107.16-.162a10 10 0 0 0 0-1.38c-.004-.055-.05-.135-.161-.161l-1.45-.353c-.626-.152-1.08-.625-1.278-1.172a7 7 0 0 0-.248-.6a1.83 1.83 0 0 1 .074-1.734l.776-1.274c.06-.098.036-.186 0-.228a10 10 0 0 0-.976-.976c-.042-.036-.131-.06-.228 0l-1.275.776a1.83 1.83 0 0 1-1.733.074a7 7 0 0 0-.6-.249a1.84 1.84 0 0 1-1.173-1.278l-.351-1.45c-.027-.11-.107-.156-.162-.16a10 10 0 0 0-1.38 0"/></svg>
        ),
        label: "Settings",
        route: "/settings",
      },
      
    ],
  },
  
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-7">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden xl:ml-4"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block xl:ml-4"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
