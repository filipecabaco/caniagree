defmodule Caniagree.Parser do

  @filters ["p", "a", "br", "b", "i"]
  @api_key Application.get_env(:caniagree, :api_key)
  @default_url "https://mercury.postlight.com/parser?url="

  def fetch(url) do
    endpoint = "#{@default_url}#{url}"
    headers = [
      {"x-api-key", @api_key}
    ]
    {:ok, resp} = HTTPoison.get(endpoint, headers)
    body = resp.body
    html = body |> Poison.decode! |> Map.get("content")
  end
 def parse(html) do
    html
    |> Floki.text()
    |> String.split("\n")
    |> Enum.reject(&invalid/1)
  end

 def parse(html, sep) do
    html
    |> Floki.text(sep: sep)
    |> String.split("\n")
    |> Enum.reject(&invalid/1)
 end

 def invalid(text) do
   text = String.replace(text, ~r/\s/, "")

   text == ""
   || Enum.member?(to_charlist(text), 32)
   || Enum.member?(to_charlist(text), 160)
 end
end
