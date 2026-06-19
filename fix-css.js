const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// The new Shadcn initialization put variables in `:root` and `.dark`
// We will simply replace the :root colors completely.

const newRoot = `:root {
  --background: #fbfaf8;
  --foreground: #111111;
  --card: #ffffff;
  --card-foreground: #111111;
  --popover: #ffffff;
  --popover-foreground: #111111;
  --primary: #111111;
  --primary-foreground: #ffffff;
  --secondary: #f4f4f5;
  --secondary-foreground: #111111;
  --muted: #f4f4f5;
  --muted-foreground: #71717a;
  --accent: #f4f4f5;
  --accent-foreground: #111111;
  --destructive: oklch(0.577 0.245 27.325);
  --border: #e4e4e7;
  --input: #e4e4e7;
  --ring: #111111;
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 1.5rem;
  --sidebar: #fbfaf8;
  --sidebar-foreground: #111111;
  --sidebar-primary: #111111;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f4f4f5;
  --sidebar-accent-foreground: #111111;
  --sidebar-border: #e4e4e7;
  --sidebar-ring: #111111;
}`;

css = css.replace(/:root\s*{[^}]*}/, newRoot);

fs.writeFileSync('src/app/globals.css', css);
