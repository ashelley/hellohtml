Sample Node Site Extension With grunt-nuget-pack builder
===

- To build package:
```
$grunt
```

- upload build/sitextension/*.nupkg to NuGet feed

- ensure website has SCM_SITEEXTENSIONS_FEED_URL set to your feed url

- install package from https://yoursite.scm.azurewebsites.net/SiteExtensions