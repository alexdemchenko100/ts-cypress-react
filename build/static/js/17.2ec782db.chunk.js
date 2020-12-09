(this['webpackJsonptypescript-react-boilerplate'] =
  this['webpackJsonptypescript-react-boilerplate'] || []).push([
  [17],
  {
    105: function (e, t, c) {
      'use strict';
      c.d(t, 'a', function () {
        return D;
      });
      var n = c(1),
        i = c(0),
        s = c(113),
        a = c(19),
        r = c(240),
        j = c(164),
        l = r.a.SubMenu,
        o = r.a.ItemGroup,
        b = j.a.useBreakpoint,
        d = function () {
          var e = b().md;
          return Object(n.jsxs)(r.a, {
            mode: e ? 'horizontal' : 'inline',
            children: [
              Object(n.jsx)(
                r.a.Item,
                {
                  children: Object(n.jsx)(a.c, {
                    className: 'navbar-item',
                    to: '/',
                    children: 'Home',
                  }),
                },
                'key-home',
              ),
              Object(n.jsxs)(
                l,
                {
                  title: 'Services',
                  children: [
                    Object(n.jsxs)(o, {
                      title: 'Features',
                      children: [
                        Object(n.jsx)(
                          r.a.Item,
                          {
                            children: Object(n.jsx)(a.c, {
                              to: '/feature1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:1',
                        ),
                        Object(n.jsx)(
                          r.a.Item,
                          {
                            children: Object(n.jsx)(a.c, {
                              to: '/feature2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:2',
                        ),
                      ],
                    }),
                    Object(n.jsxs)(o, {
                      title: 'Demo',
                      children: [
                        Object(n.jsx)(
                          r.a.Item,
                          {
                            children: Object(n.jsx)(a.c, {
                              to: '/demo1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:3',
                        ),
                        Object(n.jsx)(
                          r.a.Item,
                          {
                            children: Object(n.jsx)(a.c, {
                              to: '/demo2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:4',
                        ),
                      ],
                    }),
                  ],
                },
                'sub1',
              ),
              Object(n.jsx)(
                r.a.Item,
                {
                  children: Object(n.jsx)(a.c, {
                    className: 'navbar-item',
                    to: '/about',
                    children: 'About',
                  }),
                },
                'key-about',
              ),
              Object(n.jsx)(
                r.a.Item,
                {
                  children: Object(n.jsx)(a.c, {
                    className: 'navbar-item',
                    to: '/contact',
                    children: 'Contact',
                  }),
                },
                'key-contact',
              ),
            ],
          });
        },
        h = c(432),
        O = c(25),
        m = c(17),
        x = c(6),
        u = j.a.useBreakpoint,
        p = { logout: O.c },
        v = Object(m.b)(function (e) {
          return { isAuthenticated: e.auth.isAuthenticated, user: e.auth.user };
        }, p)(function (e) {
          var t = e.isAuthenticated,
            c = e.logout,
            i = e.user,
            s = u().md,
            j = Object(n.jsxs)(r.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(n.jsx)(
                  r.a.Item,
                  {
                    children: Object(n.jsx)(a.c, {
                      className: 'navbar-item primary',
                      to: x.a.LOGIN,
                      children: 'Sign In',
                    }),
                  },
                  'menukey-login',
                ),
                Object(n.jsx)(
                  r.a.Item,
                  {
                    children: Object(n.jsx)(a.c, {
                      className: 'navbar-item',
                      to: x.a.REGISTER,
                      children: 'Register',
                    }),
                  },
                  'menukey-signup',
                ),
              ],
            }),
            l = Object(n.jsxs)(r.a, {
              mode: s ? 'horizontal' : 'inline',
              children: [
                Object(n.jsx)(
                  r.a.Item,
                  {
                    children: Object(n.jsxs)(a.c, {
                      className: 'navbar-item primary',
                      to: x.a.PROFILE,
                      children: [
                        'Hi ',
                        Object(n.jsx)('strong', { children: i.username }),
                      ],
                    }),
                  },
                  'menukey-profile',
                ),
                Object(n.jsx)(
                  r.a.Item,
                  {
                    children: Object(n.jsx)(a.c, {
                      className: 'navbar-item primary',
                      to: x.a.HOME,
                      onClick: function () {
                        return c();
                      },
                      children: Object(n.jsxs)('span', {
                        children: [Object(n.jsx)(h.a, {}), 'Log Out'],
                      }),
                    }),
                  },
                  'menukey-login',
                ),
              ],
            });
          return Object(n.jsx)(n.Fragment, { children: t ? l : j });
        }),
        f = c(137),
        g = c(420),
        N = function () {
          var e = Object(i.useState)(!1),
            t = Object(s.a)(e, 2),
            c = t[0],
            r = t[1];
          return Object(n.jsx)('div', {
            className: 'navbar-section',
            children: Object(n.jsx)('div', {
              className: 'container',
              children: Object(n.jsxs)('nav', {
                className: 'navbar',
                children: [
                  Object(n.jsx)('div', {
                    className: 'navbar-logo',
                    children: Object(n.jsx)(a.c, {
                      to: '/',
                      className: 'navbar-item',
                      activeClassName: 'is-active',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: 'navbar-menu',
                    children: [
                      Object(n.jsx)('div', {
                        className: 'navbar-left-menu',
                        children: Object(n.jsx)(d, {}),
                      }),
                      Object(n.jsx)('div', {
                        className: 'navbar-right-menu',
                        children: Object(n.jsx)(v, {}),
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    children: [
                      Object(n.jsx)(f.a, {
                        className: 'navbar-btnBars',
                        type: 'primary',
                        onClick: function () {
                          r(!0);
                        },
                        children: Object(n.jsx)('span', {
                          className: 'navbar-btnBars-span',
                        }),
                      }),
                      Object(n.jsxs)(g.a, {
                        title: 'Drawer navbar',
                        placement: 'right',
                        closable: !0,
                        onClose: function () {
                          r(!1);
                        },
                        visible: c,
                        children: [Object(n.jsx)(d, {}), Object(n.jsx)(v, {})],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        y = c(433),
        k = c(434),
        w = c(435),
        I = c(436),
        C = c(430),
        S = function () {
          return Object(n.jsx)('div', {
            className: 'footer',
            children: Object(n.jsx)('div', {
              className: 'container',
              children: Object(n.jsxs)('div', {
                className: 'footer-inner',
                children: [
                  Object(n.jsx)('div', {
                    className: 'footer-logo',
                    children: Object(n.jsx)('a', {
                      href: '/',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(n.jsxs)('ul', {
                    className: 'footer-socials',
                    children: [
                      Object(n.jsx)('li', {
                        children: Object(n.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://github.com/tienduy-nguyen',
                          children: Object(n.jsx)(y.a, {}),
                        }),
                      }),
                      Object(n.jsx)('li', {
                        children: Object(n.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.twitter.com/tienduy_nguyen',
                          children: Object(n.jsx)(k.a, {}),
                        }),
                      }),
                      Object(n.jsx)('li', {
                        children: Object(n.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.linkedin.com/',
                          children: Object(n.jsx)(w.a, {}),
                        }),
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    className: 'copyright',
                    children: 'Copyright \xa9 2020 REACT TS',
                  }),
                  Object(n.jsx)(C.a, {
                    children: Object(n.jsx)('div', {
                      className: 'go-top',
                      children: Object(n.jsx)(I.a, {}),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        A = c(410),
        E = A.a.Header,
        R = A.a.Content,
        T = A.a.Footer,
        D = function (e) {
          var t = e.children;
          return Object(n.jsxs)(A.a, {
            className: 'main-layout',
            children: [
              Object(n.jsx)(E, { children: Object(n.jsx)(N, {}) }),
              Object(n.jsx)(R, { className: 'layout-children', children: t }),
              Object(n.jsx)(T, { children: Object(n.jsx)(S, {}) }),
            ],
          });
        };
    },
    425: function (e, t, c) {
      'use strict';
      c.r(t);
      var n = c(1),
        i = c(0),
        s = c.n(i),
        a = c(113),
        r = c(437),
        j = c(137),
        l = c(417),
        o = function () {
          var e = Object(i.useState)(!1),
            t = Object(a.a)(e, 2),
            c = t[0],
            s = t[1];
          return Object(n.jsx)('div', {
            className: 'main-body-section ',
            children: Object(n.jsx)('div', {
              className: 'container',
              children: Object(n.jsxs)('div', {
                className: 'demo-content',
                children: [
                  Object(n.jsxs)('div', {
                    className: 'block-title',
                    children: [
                      Object(n.jsx)('h2', { children: 'Demo Option 2' }),
                      Object(n.jsx)('p', {
                        children:
                          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum est minima. Dicta, ipsam explicabo ipsum velit eligendi distinctio in!',
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    className: 'demo-button-play',
                    children: Object(n.jsx)(j.a, {
                      size: 'large',
                      onClick: function (e) {
                        s(!0);
                      },
                      children: Object(n.jsx)(r.a, {}),
                    }),
                  }),
                  Object(n.jsx)(l.a, {
                    title: 'Demo Option 2',
                    visible: c,
                    onCancel: function (e) {
                      s(!1);
                    },
                    footer: null,
                    children: Object(n.jsx)('iframe', {
                      title: 'Demo Option 2',
                      width: '100%',
                      height: '350',
                      src: 'https://www.youtube.com/embed/FA8tl0fsYdI',
                      allowFullScreen: !0,
                      allow:
                        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        b = c(105),
        d = function () {
          return Object(n.jsx)(b.a, { children: Object(n.jsx)(o, {}) });
        },
        h = s.a.memo(d);
      t.default = h;
    },
  },
]);
//# sourceMappingURL=17.2ec782db.chunk.js.map
