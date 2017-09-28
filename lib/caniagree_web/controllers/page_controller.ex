defmodule CaniagreeWeb.PageController do
  use CaniagreeWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
