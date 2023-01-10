/**
 * This JS is not part of Quartz originally.
 * The JS came from hugo-book.
 */

{{- $swJS := resources.Get "sw.js" | resources.ExecuteAsTemplate "sw.js" . -}}
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "{{ $swJS.RelPermalink }}", 
    { scope: "{{ "/" | relURL }}" }
  );
}
