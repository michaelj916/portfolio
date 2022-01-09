---
layout: post
title:  "First blog post"
date:   2022-01-08 20:26:58 -0800
categories: jekyll blog development programming science
---
Testing out jekyll for this blog. This blog will be a place to discuss my thoughts about things relating to science, philosophy, technology and computers, and more. 
I will try to talk about mathematics and physics more too, as I am finding a strong interest in those fields now. 

This blog also supports code syntax highlighting so I can talk about programming, algorithms, and software development. Here is a cool fibonacci snippet from haskell:
{% highlight haskell %}
main = do 
    take 500 fibs 

fibs = map fst $ iterate (\(a,b) -> (b, a + b)) (0,1)
{% endhighlight %}
That prints the first 500 fibonacci numbers insanely fast.

That is all for now, thank you for your time.
