import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--alex-brand": "#22c55e",
    "--my-red": "#db4437",
    "--my-green": "#0f9d58",
}

export const myTheme = buildLegacyTheme({
    // Base Theme colors
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    // Brand
    "--brand-primary": props["--alex-brand"],

    // Button

    "--default-button-color": "#666",
    "--default-button-primary-color": props["--alex-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-red"],
    "--default-button-danger-color": props["--my-red"],

    // Navbar

    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],
    "--focus-color": props["--alex-brand"]
})