IF EXIST %HOME%\LogFiles\SiteExtensions\HelloHtml (
  rd /S /q %HOME%\LogFiles\SiteExtensions\HelloHtml
)

mkdir %HOME%\LogFiles\SiteExtensions\HelloHtml

IF NOT EXIST %HOME%\LogFiles\SiteExtensions\HelloHtml\iisnode (
  mkdir %HOME%\LogFiles\SiteExtensions\HelloHtml\iisnode
)

echo "starttime %DATE% %TIME%" >> %HOME%\LogFiles\SiteExtensions\HelloHtml\install.log
call npm install --production >> %HOME%\LogFiles\SiteExtensions\HelloHtml\install.log
echo "finishtime %DATE% %TIME%" >> %HOME%\LogFiles\SiteExtensions\HelloHtml\install.log