#!/usr/bin/env bash
set -e

mkdir -p public/shared/layout

cp -f src/components/layout/AppLayout.vue  public/shared/layout/AppLayout.vue
cp -f src/components/layout/SiteHeader.vue public/shared/layout/SiteHeader.vue
cp -f src/components/layout/SiteFooter.vue public/shared/layout/SiteFooter.vue

echo "export-layout: done"
