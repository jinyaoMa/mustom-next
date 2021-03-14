const pkg = require("../../package.json");

module.exports = {
  "/": {
    lang: "zh-CN",
    title: "耀的部落阁",
    archive: "归档",
    categories: "分类",
    tags: "标签",
    pagination: {
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
      caption: "分类"
    },
    tag: {
      icon: "fas fa-tags fa-fw",
      caption: "标签"
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
      icon: "fas fa-map fa-fw",
      caption: "Clustrmaps"
    }
  },
  "/en/": {
    lang: "en-US",
    title: "Mark's bloG",
    archive: "Archive",
    categories: "Categories",
    tags: "Tags",
    pagination: {
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
          url: "/"
        },
        {
          icon: "fas fa-blog fa-fw",
          text: "Blog",
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
      caption: "Categories"
    },
    tag: {
      icon: "fas fa-tags fa-fw",
      caption: "Tags"
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
      icon: "fas fa-map fa-fw",
      caption: "Clustrmaps"
    }
  }
};
