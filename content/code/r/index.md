---
title: "An R Menagerie"
author: "admin"
date: '2020-04-14'
output:
  html_document:
    keep_md: yes
summary: "My personal collection of R functions"
---


```r
library(tidyverse)
## ── Attaching packages ─────────────────────────────────────── tidyverse 1.2.1 ──
## ✔ ggplot2 3.2.1     ✔ purrr   0.3.2
## ✔ tibble  2.1.3     ✔ dplyr   0.8.3
## ✔ tidyr   1.0.0     ✔ stringr 1.4.0
## ✔ readr   1.3.1     ✔ forcats 0.4.0
## ── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
## ✖ dplyr::filter() masks stats::filter()
## ✖ dplyr::lag()    masks stats::lag()
```


# Summary Functions



```r
#' Produce a coefficient table of model coefficients/fixed effects.
#' Output is a data.frame, which can be passed to further functions.
coef_table = function(model, digits=2, ci=F){
  .nicer.col.names = list('Estimate'='b', 
                          'Std..Error'='se', 
                          'Pr...t..'='p.value', 
                          'Pr...z..'='p.value')
  result = model %>% summary() %>% coef() %>% 
    data.frame() %>% 
    rownames_to_column('term') %>% 
    mutate_if(is.numeric, round, digits=digits)
  if(ci){
    conf_intervals = confint(model, method='Wald') %>% 
      data.frame() %>% 
      rownames_to_column('term')
    colnames(conf_intervals) = c('CI_low', 'CI_high')
    result = left_join(result, conf_intervals, by='term')
  }
  .can.replace = colnames(result) %in% names(.nicer.col.names)
  colnames(result)[.can.replace] = map(colnames(result)[.can.replace],
                                       ~.nicer.col.names[[.]])
  result %>% 
    mutate(term = str_replace(term, '\\(Intercept\\)', 'Intercept'))
}
```

 
 

```r
m = lm(Sepal.Length ~ Sepal.Width*Petal.Width, data=iris)
coef_table(m)
##                      term     b   se t.value p.value
## 1               Intercept  3.13 0.57    5.45    0.00
## 2             Sepal.Width  0.50 0.17    2.91    0.00
## 3             Petal.Width  1.29 0.47    2.72    0.01
## 4 Sepal.Width:Petal.Width -0.10 0.15   -0.68    0.50
```

 


```r
lmm = lme4::lmer(Sepal.Length ~ Sepal.Width*Petal.Width + (1|Species), data=iris)
coef_table(lmm)
##                      term     b   se t.value
## 1               Intercept  2.96 0.67    4.39
## 2             Sepal.Width  0.73 0.18    4.04
## 3             Petal.Width  0.80 0.52    1.54
## 4 Sepal.Width:Petal.Width -0.09 0.14   -0.60
```

 


```r
m2 = glm((Species=='virginica') ~ Sepal.Width*Petal.Width, data=iris, family=binomial)
## Warning: glm.fit: fitted probabilities numerically 0 or 1 occurred
coef_table(m2)
##                      term      b    se z.value p.value
## 1               Intercept -11.02 35.75   -0.31    0.76
## 2             Sepal.Width  -5.06 12.31   -0.41    0.68
## 3             Petal.Width  13.59 22.59    0.60    0.55
## 4 Sepal.Width:Petal.Width   0.72  7.63    0.09    0.92
```

# Prettifying Functions

Add a little sparkles to your outputs.


```r
#' Add asterixes to p-values
pretty_p = function (pvals){
    purrr::map_chr(pvals, function(p){
        p = round(p, 4)
        if(p < .001) { return (paste("<.001", "***"))}
        if(p < .01)  { return (paste(substr(p, 2, 5), "**"))}
        if(p < .05)  { return (paste(substr(p, 2, 5), "*"))}
        if(p < .1)   { return (paste(substr(p, 2, 5), "."))}
        else{return (as.character(p))}
    })
}

pvals = c(.1, .061, .04, .00001)
pretty_p(pvals)
## [1] "0.1"       ".061 ."    ".04 *"     "<.001 ***"
```

 
 

```r
#' Replace p-values with the appropriate asterixes.
#' This is not good practice
pretty_stars = function(p){
  purrr::map_chr(pvals, function(p){
    p = round(p, 3)
    if(p < .001) { return ("***")}
    if(p < .01)  { return ("**")}
    if(p < .05)  { return ("*")}
    if(p < .1)   { return (".")}
    else{return ('')}
  })
}
pretty_stars(pvals)
## [1] ""    "."   "*"   "***"
```

 

```r
#' Given coefficients (e.g. correlation coefficients) and p-values,
#' put the appropriate asterixes next to the coefficients
pretty_coef = function (coefs, pvals, digits=3) {
  coefs = round(coefs, digits)
  purrr::map2_chr(coefs, pvals, function(b, p){
    if     (p < .001) return(paste(b, '***'))
    else if (p < .01) return(paste(b, '**'))
    else if (p < .05) return(paste(b, '*') )
    else if (p < .1)  return(paste(b, '.') )
    else return(as.character(round(b, 3)))
  })
}

tvals = c(0.1, 1.9, 2, 4)
adj_pvals = 2*pnorm(-abs(tvals)) * 2 # Bonferroni adjustment
pretty_coef(tvals, adj_pvals)
## [1] "0.1"   "1.9"   "2 ."   "4 ***"
```

 


```r
#' Calculate (approximate) p-values for t-values, and add stars.
pretty_t = function(tvals){
  pvals = 2*pnorm(-abs(tvals))
  pretty_coef(tvals, pvals)
}

pretty_t(tvals)
## [1] "0.1"   "1.9 ." "2 *"   "4 ***"
```


