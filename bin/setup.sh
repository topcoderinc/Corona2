echo 'enter NEW project name'
read name

//git clone --recursive git@github.com:topcoderinc/tcProjWrapper.git drone-series
sed -i.bak s/tcprojWrapper/${name}/g  mkdocs.yml && rm mkdocs.yml.bak
rm -rf .git*
git init
git add .
git commit -am 'first commit to ${name}, templated from git@github.com:topcoderinc/tcProjWrapper.git '
mkdir src
git submodule add git@github.com:topcoderinc/dsp-server.git src/dsp-server
git submodule add git@github.com:topcoderinc/dsp-server.git src/dsp-frontend
