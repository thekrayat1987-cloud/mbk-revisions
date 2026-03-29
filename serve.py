import http.server, os, sys

os.chdir(os.path.dirname(os.path.abspath(__file__)))
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Redirect common typo URLs to the correct file
        path = self.path.split('?')[0].rstrip('/')
        aliases = {
            '/MBK_revisions': '/MBK_Revisions.html',
            '/MBK_Revisions': '/MBK_Revisions.html',
            '/mbk_revisions': '/MBK_Revisions.html',
            '/MBK_v11': '/MBK_v11.html',
        }
        if path in aliases:
            self.send_response(302)
            self.send_header('Location', aliases[path])
            self.end_headers()
            return
        super().do_GET()

httpd = http.server.HTTPServer(("", port), Handler)
print(f"Serving at http://localhost:{port}")
httpd.serve_forever()
