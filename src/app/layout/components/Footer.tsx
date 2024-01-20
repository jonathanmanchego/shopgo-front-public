import LinkText from "../../components/link/LinkText";

function Footer() {
  return (


    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-emerald-700 dark:border-gray-800">
      <span className="text-sm text-gray-900 sm:text-center dark:text-gray-900">© 2023 <a href="/" className="hover:underline">TeamManchas™</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <LinkText style="hover:underline me-4 md:me-6" message="Acerda" url="#" title="Acerca de" />
        </li>
        <li>
          <LinkText style="hover:underline me-4 md:me-6" message="Productos" url="/products" title="Productos" />
        </li>
        {/* <li>
          <LinkText style="hover:underline me-4 md:me-6" message="Licensing" url="#" title="Licensing" />
        </li> */}
        <li>
          <LinkText style="hover:underline" message="Contacto" url="#" title="Contacto" />
        </li>
      </ul>
    </footer>

  );
}

export default Footer;