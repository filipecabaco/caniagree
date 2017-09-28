defmodule CaniagreeWeb.ServiceControllerTest do
  use CaniagreeWeb.ConnCase

  alias Caniagree.Services
  alias Caniagree.Services.Service

  @create_attrs %{domain: "some domain", name: "some name", paragraphs: []}
  @update_attrs %{domain: "some updated domain", name: "some updated name", paragraphs: []}
  @invalid_attrs %{domain: nil, name: nil, paragraphs: nil}

  def fixture(:service) do
    {:ok, service} = Services.create_service(@create_attrs)
    service
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all services", %{conn: conn} do
      conn = get conn, service_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create service" do
    test "renders service when data is valid", %{conn: conn} do
      conn = post conn, service_path(conn, :create), service: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, service_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "domain" => "some domain",
        "name" => "some name",
        "paragraphs" => []}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, service_path(conn, :create), service: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update service" do
    setup [:create_service]

    test "renders service when data is valid", %{conn: conn, service: %Service{id: id} = service} do
      conn = put conn, service_path(conn, :update, service), service: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, service_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "domain" => "some updated domain",
        "name" => "some updated name",
        "paragraphs" => []}
    end

    test "renders errors when data is invalid", %{conn: conn, service: service} do
      conn = put conn, service_path(conn, :update, service), service: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete service" do
    setup [:create_service]

    test "deletes chosen service", %{conn: conn, service: service} do
      conn = delete conn, service_path(conn, :delete, service)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, service_path(conn, :show, service)
      end
    end
  end

  defp create_service(_) do
    service = fixture(:service)
    {:ok, service: service}
  end
end
