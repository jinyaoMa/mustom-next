const pkg = require("../../package.json");

module.exports = {
  "/": {
    lang: "zh-CN",
    title: "耀的部落阁",
    archive: "博客",
    categories: "分类",
    tags: "标签",
    meta: {
      date: {
        icon: "fas fa-calendar-alt fa-fw",
        text: "发布日期"
      },
      updated: {
        icon: "fas fa-calendar-check fa-fw",
        text: "更新日期"
      },
      categories: {
        icon: "fas fa-folder-open fa-fw",
        text: "文章分类"
      },
      more: {
        icon: "fas fa-chevron-right fa-fw",
        text: "查看全文"
      },
      word: {
        icon: "fas fa-file-word fa-fw",
        text: "文章词汇量"
      },
      time: {
        icon: "fas fa-stopwatch fa-fw",
        text: "预计阅读时间"
      }
    },
    audioplayer: {
      enable: true
    },
    pagination: {
      lengthPerPage: 9,
      title: {
        directory: "第 ? 页 | ?",
        frontmatter: "第 ? 页 - ? | ?"
      },
      prev: {
        page: "上一页",
        post: "新文章"
      },
      next: {
        page: "下一页",
        post: "旧文章"
      }
    },
    unit: {
      post: {
        one: "文章",
        more: "文章"
      },
      category: {
        one: "分类",
        more: "分类"
      },
      tag: {
        one: "标签",
        more: "标签"
      },
      minute: {
        one: "分钟",
        more: "分钟"
      }
    },
    sitename: {
      prepend: "",
      text: "耀 の ",
      append: "部落阁"
    },
    settings: {
      icon: "fas fa-sliders-h",
      title: "设置"
    },
    search: {
      icon: "fas fa-search",
      title: "搜索"
    },
    menu: {
      icon: "fas fa-route fa-fw",
      caption: "菜单",
      list: [
        {
          icon: "fas fa-home fa-fw",
          text: "首页",
          url: "/"
        },
        {
          icon: "fas fa-blog fa-fw",
          text: "博客",
          url: "/posts/"
        },
        {
          icon: "fas fa-school fa-fw",
          text: "B.Tech",
          url: "/b.tech/"
        }
      ]
    },
    brand: {
      icon: "fas fa-info-circle fa-fw",
      caption: "简介",
      name: "耀",
      signature: "问题, 方法, 程序, 标准, 解决",
      contacts: [
        {
          icon: "fab fa-qq fa-fw",
          tooltip: "通过 QQ 联系我",
          url: "tencent://Message/?uin=907881445"
        },
        {
          icon: "fas fa-envelope fa-fw",
          tooltip: "通过 Email 联系我",
          url: "mailto://jinyao.ma@outlook.com"
        },
        {
          icon: "fab fa-github fa-fw",
          tooltip: "通过 Github 关注我",
          url: "https://github.com/jinyaoMa"
        }
      ]
    },
    category: {
      icon: "fas fa-folder-open fa-fw",
      caption: "分类",
      placeholder: "分类呢？我的分类呢？谁把我分类吃啦？"
    },
    tag: {
      icon: "fas fa-tags fa-fw",
      caption: "标签",
      placeholder:
        "标签是不可能有标签了，这辈子都不会有标签了，只能看看分类这样子。"
    },
    recent: {
      post: {
        icon: "fas fa-paragraph fa-fw",
        caption: "近期文章",
        placeholder: "文章呢？我的文章呢？谁把我文章吃啦？（饱嗝.gif）",
        limit: 5
      },
      doc: {
        icon: "fas fa-align-left fa-fw",
        caption: "近期文档",
        placeholder: "文档呢？我的文档呢？谁把我文档吃啦？（饱嗝.gif）",
        limit: 5
      }
    },
    footer: {
      copyright: `© 2019 - ${new Date().getFullYear()} jinyaoMa`,
      addition: [
        `由 <a target="_blank" href="//vuepress.vuejs.org/" title="VuePress v${pkg.dependencies.vuepress.replace(
          /[^\.0-9]/g,
          ""
        )}">VuePress</a> 强力驱动`,
        `主题 <a target="_blank" href="//github.com/jinyaoMa/mustom-next" title="mustom-next">Mustom<sup>next</sup></a> By <a target="_blank" href="//github.com/jinyaoMa" title="jinyaoMa">jinyaoMa</a>`
      ],
      counter: {
        pv: {
          icon: "fas fa-eye",
          text: "本站总点击量"
        },
        uv: {
          icon: "fas fa-user",
          text: "本站总访客量"
        },
        wd: {
          icon: "fas fa-file-word",
          text: "本站总词汇量"
        }
      },
      license: `<a target="_blank" href="//creativecommons.org/licenses/by-nc-sa/4.0/" title="知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议"><img src="/assets/img/by-nc-sa.svg"></a>`
    },
    clustrmaps: {
      enable: true,
      icon: "fas fa-map fa-fw",
      caption: "Clustrmaps",
      id: "clustrmaps", // clstr_globe / clustrmaps
      src:
        "//cdn.clustrmaps.com/map_v2.js?cl=333333&w=a&t=t&d=kuCCiVvtASTqmAMxPSTLcjxs-p8j6ht3LUi9z9Q-OKc&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=333333"
    },
    content: {
      icon: "ma-jinyao",
      caption: "页面内容"
    }
  },
  "/en/": {
    lang: "en-US",
    title: "Mark's bloG",
    archive: "Blog",
    categories: "Categories",
    tags: "Tags",
    meta: {
      date: {
        icon: "fas fa-calendar-alt fa-fw",
        text: "Date"
      },
      updated: {
        icon: "fas fa-calendar-check fa-fw",
        text: "Last Updated"
      },
      categories: {
        icon: "fas fa-folder-open fa-fw",
        text: "Post Categories"
      },
      more: {
        icon: "fas fa-chevron-right",
        text: "MORE"
      },
      word: {
        icon: "fas fa-file-word fa-fw",
        text: "Post word count"
      },
      time: {
        icon: "fas fa-stopwatch fa-fw",
        text: "Estimated reading time"
      }
    },
    audioplayer: {
      enable: true
    },
    pagination: {
      lengthPerPage: 9,
      title: {
        directory: "Page ? | ?",
        frontmatter: "Page ? - ? | ?"
      },
      prev: {
        page: "Prev",
        post: "Newer"
      },
      next: {
        page: "Next",
        post: "Older"
      }
    },
    unit: {
      post: {
        one: "post",
        more: "posts"
      },
      category: {
        one: "category",
        more: "categories"
      },
      tag: {
        one: "tag",
        more: "tags"
      },
      minute: {
        one: "min.",
        more: "mins"
      }
    },
    sitename: {
      prepend: "",
      text: "Mark's ",
      append: "bloG"
    },
    settings: {
      icon: "fas fa-sliders-h",
      title: "Settings"
    },
    search: {
      icon: "fas fa-search",
      title: "Search"
    },
    menu: {
      icon: "fas fa-route fa-fw",
      caption: "Menu",
      list: [
        {
          icon: "fas fa-home fa-fw",
          text: "Home",
          url: "/en/"
        },
        {
          icon: "fas fa-blog fa-fw",
          text: "Blog",
          url: "/en/posts/"
        }
      ]
    },
    brand: {
      icon: "fas fa-info-circle",
      caption: "Overview",
      name: "Mark",
      signature: "Problems, Methods, Processes, Standards, Solutions",
      contacts: [
        {
          icon: "fab fa-qq fa-fw",
          tooltip: "Contact me via QQ",
          url: "tencent://Message/?uin=907881445"
        },
        {
          icon: "fas fa-envelope fa-fw",
          tooltip: "Contact me via Email",
          url: "mailto://jinyao.ma@outlook.com"
        },
        {
          icon: "fab fa-github fa-fw",
          tooltip: "Follow me via Github",
          url: "https://github.com/jinyaoMa"
        }
      ]
    },
    category: {
      icon: "fas fa-folder-open fa-fw",
      caption: "Categories",
      placeholder: "[Empty]"
    },
    tag: {
      icon: "fas fa-tags fa-fw",
      caption: "Tags",
      placeholder: "[Empty]"
    },
    recent: {
      post: {
        icon: "fas fa-paragraph fa-fw",
        caption: "Recent Posts",
        placeholder: "[Empty]",
        limit: 5
      },
      doc: {
        icon: "fas fa-align-left fa-fw",
        caption: "Recent Docs",
        placeholder: "[Empty]",
        limit: 5
      }
    },
    footer: {
      copyright: `© 2019 - ${new Date().getFullYear()} jinyaoMa`,
      addition: [
        `Powered by <a target="_blank" href="//vuepress.vuejs.org/" title="VuePress v${pkg.dependencies.vuepress.replace(
          /[^\.0-9]/g,
          ""
        )}">VuePress</a>`,
        `Theme <a target="_blank" href="//github.com/jinyaoMa/mustom-next" title="mustom-next">Mustom<sup>next</sup></a> By <a target="_blank" href="//github.com/jinyaoMa" title="jinyaoMa">jinyaoMa</a>`
      ],
      counter: {
        pv: {
          icon: "fas fa-eye",
          text: "Site total page view"
        },
        uv: {
          icon: "fas fa-user",
          text: "Site total visitors"
        },
        wd: {
          icon: "fas fa-file-word",
          text: "Site total word count"
        }
      },
      license: `<a target="_blank" href="//creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"><img src="/assets/img/by-nc-sa.svg"></a>`
    },
    clustrmaps: {
      enable: true,
      icon: "fas fa-map fa-fw",
      caption: "Clustrmaps",
      id: "clustrmaps", // clstr_globe / clustrmaps
      src:
        "//cdn.clustrmaps.com/map_v2.js?cl=333333&w=a&t=t&d=kuCCiVvtASTqmAMxPSTLcjxs-p8j6ht3LUi9z9Q-OKc&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=333333"
    },
    content: {
      icon: "ma-jinyao",
      caption: "Page Content"
    }
  }
};
