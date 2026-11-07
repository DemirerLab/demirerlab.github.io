---
---

{% include section.html background="images/home/hero.jpg" %}

# Demirer Lab

Nano and Biotechnology for Precise and Programmable Plant Genetic Engineering
{: .center}

**Mission Statement:** The primary goal of our team is to train a dynamic and talented group of scientists interested in improving human and planetary health through plant genetic engineering. We combine interdisciplinary solutions from nanotechnology, chemistry, plant biology, synthetic biology, and engineering.

{% include section.html %}

## Research Directions

{% capture text %}
{%
  include button.html
  link="research/nanotechnology/"
  text="Nanotechnology"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}
{% endcapture %}

{%
  include feature.html
  image="images/home/nanotechnology.jpg"
  link="research/nanotechnology/"
  title="Improved plant biomolecule delivery via nanotechnology"
  text=text
%}

{% capture text %}
{%
  include button.html
  link="research/genetic-engineering/"
  text="Genetic engineering"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}
{% endcapture %}

{%
  include feature.html
  image="images/home/genetic-engineering.jpg"
  link="research/genetic-engineering/"
  title="Precise and programmable plant genetic engineering"
  text=text
  flip=true
%}

{% capture text %}
{%
  include button.html
  link="research/rhizosphere/"
  text="Rhizosphere"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}
{% endcapture %}

{%
  include feature.html
  image="images/home/rhizosphere.jpg"
  link="research/rhizosphere/"
  title="Plant-microbe interactions in the rhizosphere"
  text=text
  flip=true
%}

{% include section.html %}

## Research Videos

{% capture col1 %}
<iframe src="https://www.youtube-nocookie.com/embed/gGYvnxN6iuU" title="RSPS2024 Finalist Oral Presentation Contest - Section I" style="width:100%; aspect-ratio:16/9; border:0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_RSPS2024 Finalist Oral Presentation Contest - Section I_<br>
Gozde's talk starts at 1:37:45
{: .center}
{% endcapture %}

{% capture col2 %}
<iframe src="https://www.youtube-nocookie.com/embed/NgYrI9POOoo" title="SynBYSS with Dr. Matt Pavlovich, the editor of Trends in Biotechnol &amp; Prof. Gözde Demirer at Caltech" style="width:100%; aspect-ratio:16/9; border:0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_SynBYSS with Dr. Matt Pavlovich, the editor of Trends in Biotechnol & Prof. Gözde Demirer at Caltech_
{: .center}
{% endcapture %}

{% capture col3 %}
<iframe src="https://www.youtube-nocookie.com/embed/gpWp5DyiLZc" title="Demirer Seminar 2019" style="width:100%; aspect-ratio:16/9; border:0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_Demirer Seminar 2019_
{: .center}
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
