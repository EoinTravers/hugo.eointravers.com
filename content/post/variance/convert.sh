Rscript -e "rmarkdown::render('index.Rmd')"
# Rscript -e "rmarkdown::render('index.Rmd', rmarkdown::md_document())"
perl -0777 -i.original -pe 's/\n```\n*```[A-z]*//igs' index.md  # Join neighbouring code blocks
perl -0777 -i.original -pe 's/\\\\\n/\\\\\\\\\n/igs' index.md  # Double tex newlines
rm index.html
# perl -0777 -i.original -pe 's/a test\nPlease do not/not a test\nBe/igs' alpha.txt
