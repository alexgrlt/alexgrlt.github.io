---
layout: page
title: Projects
permalink: /projects/
description: An overview of the current projects I am currently involved in.
nav: true
nav_order: 3

# optional; only used if you want categories
display_categories: [education]
horizontal: false

lang: en
page-id: projects
---

<!-- pages/projects.md -->
<div class="projects">

  {%- comment -%}
  1) Get *all* projects from the `_projects` collection
  2) Sort them by `importance` (lower = shown first)
  {%- endcomment -%}
  {% assign sorted_projects = site.projects | sort: "importance" %}

  {%- comment -%}
  SIMPLE VERSION: ignore categories and just print all projects.
  Once this works, you can re-enable the category logic if you want.
  {%- endcomment -%}

  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>
