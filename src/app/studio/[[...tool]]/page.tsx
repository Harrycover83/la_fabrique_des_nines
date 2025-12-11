"use client";

/**
 * Cette route rend l'interface Studio Sanity dans le navigateur
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
