defmodule CaniagreeWeb.ServiceController do
  use CaniagreeWeb, :controller

  alias Caniagree.Services
  alias Caniagree.Services.Service

  action_fallback CaniagreeWeb.FallbackController

  def index(conn, _params) do
    services = Services.list_services()
    render(conn, "index.json", services: services)
  end

  def create(conn, %{"service" => service_params}) do
    with {:ok, %Service{} = service} <- Services.create_service(service_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", service_path(conn, :show, service))
      |> render("show.json", service: service)
    end
  end

  def show(conn, %{"id" => id}) do
    service = Services.get_service!(id)
    render(conn, "show.json", service: service)
  end

  def update(conn, %{"id" => id, "service" => service_params}) do
    service = Services.get_service!(id)

    with {:ok, %Service{} = service} <- Services.update_service(service, service_params) do
      render(conn, "show.json", service: service)
    end
  end

  def delete(conn, %{"id" => id}) do
    service = Services.get_service!(id)
    with {:ok, %Service{}} <- Services.delete_service(service) do
      send_resp(conn, :no_content, "")
    end
  end

  def paragraphs(conn, %{"id" => id}) do
    %{paragraphs: paragraphs, name: name} = Services.get_service!(id)

    resolved = paragraphs
    |> Enum.map(&Services.get_paragraph!/1)
    |> Enum.map(&Map.from_struct/1)
    |> Enum.map(&(Map.delete(&1, :__meta__)))

    json conn, %{name: name, paragraphs: resolved}
  end

  def submit(conn, %{"domain" => domain, "name" => name, "url" => url}) do
    # %{"domain" => domain, "name" => name, "url" => url} = Poison.decode!(body)
    text_list = Caniagree.Parser.parse(url)
    id_list = save_texts_and_get_ids(text_list, [])
    Caniagree.Services.create_service(
      %{domain: domain,
        name: name,
        paragraphs: id_list})

    conn
    |> resp(201, "")
  end

  defp save_texts_and_get_ids([], result), do: result
  defp save_texts_and_get_ids([text | rest], result) do
    id = insert_text(text)
    new_result = result ++ [id]
    save_texts_and_get_ids(rest, new_result)
  end

  defp insert_text(text) do
      {:ok, %{id: id}} = Caniagree.Services.create_paragraph(
        %{body: text, up_vote: 0, down_vote: 0})

      id
  end
end
