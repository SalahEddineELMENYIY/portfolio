import { Button } from "@/components/ui/button";

export function DownloadCVButton() {
  return (
    <Button asChild className="mx-12 md:mx-4">
      <a href="/Salah-Eddine_ELMENYIY_CV.pdf" download>
        Download CV
      </a>
    </Button>
  );
}
